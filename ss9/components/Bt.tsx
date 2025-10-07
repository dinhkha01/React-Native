import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// Interface định nghĩa cấu trúc liên hệ
interface Contact {
  id: string;
  name: string;
  phone: string;
  email: string;
}

export default function Bt() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [detailModalVisible, setDetailModalVisible] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  
  // Form state với kiểu Contact
  const [formData, setFormData] = useState<Contact>({
    id: '',
    name: '',
    phone: '',
    email: '',
  });

  // Load dữ liệu từ AsyncStorage khi khởi động
  useEffect(() => {
    loadContacts();
  }, []);

  // Lưu dữ liệu vào AsyncStorage mỗi khi contacts thay đổi
  useEffect(() => {
    if (contacts.length > 0) {
      saveContacts();
    }
  }, [contacts]);

  const loadContacts = async () => {
    try {
      const storedContacts = await AsyncStorage.getItem('contacts');
      if (storedContacts !== null) {
        setContacts(JSON.parse(storedContacts) as Contact[]);
      }
    } catch (error) {
      console.error('Lỗi khi đọc dữ liệu:', error);
    }
  };

  const saveContacts = async () => {
    try {
      await AsyncStorage.setItem('contacts', JSON.stringify(contacts));
    } catch (error) {
      console.error('Lỗi khi lưu dữ liệu:', error);
    }
  };

  const openAddModal = () => {
    setIsEditing(false);
    setFormData({
      id: '',
      name: '',
      phone: '',
      email: '',
    });
    setModalVisible(true);
  };

  const openEditModal = (contact: Contact) => {
    setIsEditing(true);
    setFormData(contact);
    setDetailModalVisible(false);
    setModalVisible(true);
  };

  const handleSave = () => {
    if (!formData.name.trim() || !formData.phone.trim()) {
      Alert.alert('Lỗi', 'Vui lòng nhập tên và số điện thoại');
      return;
    }

    if (isEditing) {
      // Cập nhật liên hệ
      const updatedContacts = contacts.map((contact: Contact) =>
        contact.id === formData.id ? formData : contact
      );
      setContacts(updatedContacts);
    } else {
      // Thêm liên hệ mới
      const newContact: Contact = {
        ...formData,
        id: Date.now().toString(),
      };
      setContacts([...contacts, newContact]);
    }

    setModalVisible(false);
    setFormData({ id: '', name: '', phone: '', email: '' });
  };

  const handleDelete = (contact: Contact) => {
    Alert.alert(
      'Xác nhận xóa',
      `Bạn có chắc muốn xóa liên hệ "${contact.name}" không?`,
      [
        { text: 'Hủy', style: 'cancel' },
        {
          text: 'Xóa',
          style: 'destructive',
          onPress: () => {
            const filteredContacts = contacts.filter((c: Contact) => c.id !== contact.id);
            setContacts(filteredContacts);
            setDetailModalVisible(false);
            
            // Nếu xóa hết liên hệ, xóa luôn trong AsyncStorage
            if (filteredContacts.length === 0) {
              AsyncStorage.removeItem('contacts');
            }
          },
        },
      ]
    );
  };

  const openDetailModal = (contact: Contact): void => {
    setSelectedContact(contact);
    setDetailModalVisible(true);
  };

  const renderContactItem = ({ item }: { item: Contact }) => (
    <TouchableOpacity
      style={styles.contactItem}
      onPress={() => openDetailModal(item)}
    >
      <View style={styles.avatarCircle}>
        <Text style={styles.avatarText}>
          {item.name.charAt(0).toUpperCase()}
        </Text>
      </View>
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactPhone}>{item.phone}</Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Danh Bạ</Text>
        <Text style={styles.headerSubtitle}>
          {contacts.length} liên hệ
        </Text>
      </View>

      {/* Danh sách liên hệ */}
      <FlatList
        data={contacts}
        renderItem={renderContactItem}
        keyExtractor={(item: Contact) => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Chưa có liên hệ nào</Text>
            <Text style={styles.emptySubtext}>
              Nhấn nút Thêm mới để tạo liên hệ đầu tiên
            </Text>
          </View>
        }
      />

      {/* Nút thêm mới */}
      <TouchableOpacity style={styles.addButton} onPress={openAddModal}>
        <Text style={styles.addButtonText}>+ Thêm mới</Text>
      </TouchableOpacity>

      {/* Modal Form Thêm/Sửa */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>
              {isEditing ? 'Sửa liên hệ' : 'Thêm liên hệ mới'}
            </Text>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Tên *</Text>
              <TextInput
                style={styles.input}
                placeholder="Nhập tên"
                value={formData.name}
                onChangeText={(text: string) => setFormData({ ...formData, name: text })}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Số điện thoại *</Text>
              <TextInput
                style={styles.input}
                placeholder="Nhập số điện thoại"
                keyboardType="phone-pad"
                value={formData.phone}
                onChangeText={(text: string) => setFormData({ ...formData, phone: text })}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Nhập email (không bắt buộc)"
                keyboardType="email-address"
                value={formData.email}
                onChangeText={(text: string) => setFormData({ ...formData, email: text })}
              />
            </View>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Hủy</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, styles.saveButton]}
                onPress={handleSave}
              >
                <Text style={styles.saveButtonText}>Lưu</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal Chi tiết liên hệ */}
      <Modal
        visible={detailModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setDetailModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {selectedContact && (
              <>
                <View style={styles.detailHeader}>
                  <View style={styles.detailAvatar}>
                    <Text style={styles.detailAvatarText}>
                      {selectedContact.name.charAt(0).toUpperCase()}
                    </Text>
                  </View>
                  <Text style={styles.detailName}>{selectedContact.name}</Text>
                </View>

                <View style={styles.detailInfo}>
                  <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Số điện thoại:</Text>
                    <Text style={styles.detailValue}>{selectedContact.phone}</Text>
                  </View>

                  {selectedContact.email ? (
                    <View style={styles.detailRow}>
                      <Text style={styles.detailLabel}>Email:</Text>
                      <Text style={styles.detailValue}>{selectedContact.email}</Text>
                    </View>
                  ) : null}
                </View>

                <View style={styles.detailButtons}>
                  <TouchableOpacity
                    style={[styles.detailButton, styles.editButton]}
                    onPress={() => openEditModal(selectedContact)}
                  >
                    <Text style={styles.editButtonText}>✎ Sửa</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.detailButton, styles.deleteButton]}
                    onPress={() => handleDelete(selectedContact)}
                  >
                    <Text style={styles.deleteButtonText}>🗑 Xóa</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={styles.closeDetailButton}
                  onPress={() => setDetailModalVisible(false)}
                >
                  <Text style={styles.closeDetailButtonText}>Đóng</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2196F3',
    padding: 20,
    paddingTop: 50,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 5,
  },
  listContainer: {
    padding: 10,
    flexGrow: 1,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  avatarCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  contactInfo: {
    flex: 1,
    marginLeft: 15,
  },
  contactName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  contactPhone: {
    fontSize: 14,
    color: '#666',
    marginTop: 3,
  },
  arrow: {
    fontSize: 24,
    color: '#ccc',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  emptyText: {
    fontSize: 18,
    color: '#999',
    fontWeight: '600',
  },
  emptySubtext: {
    fontSize: 14,
    color: '#bbb',
    marginTop: 10,
    textAlign: 'center',
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#4CAF50',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 25,
    width: '85%',
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 18,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#555',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  modalButton: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#f0f0f0',
    marginRight: 10,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    marginLeft: 10,
  },
  cancelButtonText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '600',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  detailHeader: {
    alignItems: 'center',
    marginBottom: 25,
  },
  detailAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  detailAvatarText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
  },
  detailName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  detailInfo: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  detailRow: {
    marginBottom: 12,
  },
  detailLabel: {
    fontSize: 13,
    color: '#888',
    marginBottom: 3,
  },
  detailValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  detailButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  detailButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  editButton: {
    backgroundColor: '#2196F3',
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: '#f44336',
    marginLeft: 10,
  },
  editButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
  closeDetailButton: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  closeDetailButtonText: {
    color: '#666',
    fontSize: 15,
    fontWeight: '600',
  },
});