import React, { useEffect, useState } from 'react';
import { View, Button, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import ContactForm from '../components/ContactForm';
import { getContact, updateContact } from '../storage/contactsStorage';
import { Contact } from '../types';

const EditContactScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { contactId } = route.params;
  const [contact, setContact] = useState<Contact | null>(null);

  useEffect(() => {
    const fetchContact = async () => {
      const fetchedContact = await getContact(contactId);
      setContact(fetchedContact);
    };

    fetchContact();
  }, [contactId]);

  const handleUpdateContact = async (updatedContact: Contact) => {
    try {
      await updateContact(contactId, updatedContact);
      Alert.alert('Success', 'Contact updated successfully');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to update contact');
    }
  };

  if (!contact) {
    return null; // or a loading indicator
  }

  return (
    <View>
      <ContactForm
        initialValues={contact}
        onSubmit={handleUpdateContact}
      />
      <Button title="Cancel" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default EditContactScreen;