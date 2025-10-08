import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Contact } from '../types';

const ContactDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { contact }: { contact: Contact } = route.params;

  const handleEdit = () => {
    navigation.navigate('EditContact', { contact });
  };

  const handleDelete = () => {
    // Logic to delete the contact
  };

  return (
    <View>
      <Text>Name: {contact.name}</Text>
      <Text>Phone: {contact.phone}</Text>
      <Text>Email: {contact.email}</Text>
      <Button title="Edit" onPress={handleEdit} />
      <Button title="Delete" onPress={handleDelete} />
    </View>
  );
};

export default ContactDetailScreen;