import React, { useEffect, useState } from 'react';
import { View, Button, FlatList, Text } from 'react-native';
import { getContacts } from '../storage/contactsStorage';
import ContactItem from '../components/ContactItem';

const HomeScreen = ({ navigation }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const storedContacts = await getContacts();
      setContacts(storedContacts);
    };

    fetchContacts();
  }, []);

  return (
    <View>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ContactItem
            contact={item}
            onEdit={() => navigation.navigate('EditContact', { contact: item })}
            onDelete={() => {/* Handle delete contact */}}
          />
        )}
      />
      <Button
        title="Add Contact"
        onPress={() => navigation.navigate('AddContact')}
      />
    </View>
  );
};

export default HomeScreen;