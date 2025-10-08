import React, { useState } from 'react';
import { View, Button, Alert } from 'react-native';
import ContactForm from '../components/ContactForm';
import { addContact } from '../storage/contactsStorage';

const AddContactScreen = ({ navigation }) => {
  const [contact, setContact] = useState({ name: '', phone: '', email: '' });

  const handleSubmit = async () => {
    if (!contact.name || !contact.phone || !contact.email) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    await addContact(contact);
    Alert.alert('Success', 'Contact added successfully');
    navigation.goBack();
  };

  return (
    <View>
      <ContactForm 
        contact={contact} 
        setContact={setContact} 
        onSubmit={handleSubmit} 
      />
      <Button title="Add Contact" onPress={handleSubmit} />
    </View>
  );
};

export default AddContactScreen;