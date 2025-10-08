import AsyncStorage from '@react-native-async-storage/async-storage';
import { Contact } from '../types';

const CONTACTS_STORAGE_KEY = '@contacts';

export const getContacts = async (): Promise<Contact[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(CONTACTS_STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Failed to fetch contacts from storage:', e);
    return [];
  }
};

export const addContact = async (contact: Contact): Promise<void> => {
  try {
    const contacts = await getContacts();
    contacts.push(contact);
    await AsyncStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify(contacts));
  } catch (e) {
    console.error('Failed to add contact:', e);
  }
};

export const updateContact = async (updatedContact: Contact): Promise<void> => {
  try {
    const contacts = await getContacts();
    const index = contacts.findIndex(contact => contact.id === updatedContact.id);
    if (index !== -1) {
      contacts[index] = updatedContact;
      await AsyncStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify(contacts));
    }
  } catch (e) {
    console.error('Failed to update contact:', e);
  }
};

export const deleteContact = async (id: string): Promise<void> => {
  try {
    const contacts = await getContacts();
    const filteredContacts = contacts.filter(contact => contact.id !== id);
    await AsyncStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify(filteredContacts));
  } catch (e) {
    console.error('Failed to delete contact:', e);
  }
};