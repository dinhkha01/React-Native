import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface ContactItemProps {
  contact: {
    id: string;
    name: string;
    phone: string;
  };
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const ContactItem: React.FC<ContactItemProps> = ({ contact, onEdit, onDelete }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{contact.name}</Text>
      <Text style={styles.phone}>{contact.phone}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Edit" onPress={() => onEdit(contact.id)} />
        <Button title="Delete" onPress={() => onDelete(contact.id)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default ContactItem;