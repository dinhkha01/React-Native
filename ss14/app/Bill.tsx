import { axiosInstance } from '@/api/apiClient';
import AddBillModal from '@/components/AddBillModal';
import BillItem from '@/components/BillItem';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    Alert,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';


export interface Bill {
  id: string;
  name: string;
  amount: number;
  status: 'Chưa thanh toán' | 'Đã thanh toán';
}

export default function BillScreen() {
  const [bills, setBills] = useState<Bill[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  // Load dữ liệu từ AsyncStorage
  useEffect(() => {
    loadBills();
  }, []);

  const loadBills = async () => {
    try {
      const jsonValue = await axiosInstance.get('')
      if (jsonValue != null) {
        setBills(JSON.parse(jsonValue.data));
      }
    } catch (e) {
      console.error('Error loading bills:', e);
    }
  };

  const saveBills = async (newBills: Bill[]) => {
    try {
      const jsonValue = JSON.stringify(newBills);
      await AsyncStorage.setItem('@bills', jsonValue);
      setBills(newBills);
    } catch (e) {
      console.error('Error saving bills:', e);
    }
  };

  // Thêm hóa đơn mới
  const handleAddBill = (name: string, amount: number, status: string) => {
    const newBill: Bill = {
      id: Date.now().toString(),
      name,
      amount,
      status: status as 'Chưa thanh toán' | 'Đã thanh toán',
    };
    const updatedBills = [...bills, newBill];
    saveBills(updatedBills);
    setModalVisible(false);
  };

  // Cập nhật trạng thái hóa đơn
  const handleToggleStatus = (id: string) => {
    const updatedBills = bills.map((bill) => {
      if (bill.id === id) {
        const newStatus: Bill['status'] = bill.status === 'Chưa thanh toán' ? 'Đã thanh toán' : 'Chưa thanh toán';
        return {
          ...bill,
          status: newStatus,
        };
      }
      return bill;
    });
    saveBills(updatedBills);
  };

  // Xóa hóa đơn
  const handleDeleteBill = (id: string) => {
    Alert.alert('Xóa hóa đơn', 'Bạn có chắc chắn muốn xóa hóa đơn này?', [
      {
        text: 'HỦY',
        style: 'cancel',
      },
      {
        text: 'XÓA',
        onPress: () => {
          const updatedBills = bills.filter((bill) => bill.id !== id);
          saveBills(updatedBills);
        },
        style: 'destructive',
      },
    ]);
  };

  const renderEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>Chưa có hóa đơn nào.</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hóa đơn tiền điện</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <AntDesign name="plus" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={bills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BillItem
            bill={item}
            onToggleStatus={handleToggleStatus}
            onDelete={handleDeleteBill}
          />
        )}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={renderEmptyComponent}
      />

      <AddBillModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAdd={handleAddBill}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 100,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
  listContent: {
    padding: 16,
    flexGrow: 1,
  },
});