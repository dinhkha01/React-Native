import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, Button } from 'react-native';
import { getContacts } from '../storage/contactsStorage';
import ContactItem from './ContactItem';

const ContactList = ({ navigation }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const storedContacts = await getContacts();
      setContacts(storedContacts);
    };

    fetchContacts();
  }, []);

  const renderItem = ({ item }) => (
    <ContactItem 
      contact={item} 
      onEdit={() => navigation.navigate('EditContact', { contact: item })} 
      onDelete={() => handleDelete(item.id)} 
    />
  );

  const handleDelete = (id) => {
    // Logic to delete contact
  };

  return (
    <View>
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button title="Add Contact" onPress={() => navigation.navigate('AddContact')} />
    </View>
  );
};

export default ContactList;