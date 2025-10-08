import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

interface ContactFormProps {
  onSubmit: (contact: { name: string; phone: string; email: string }) => void;
  initialValues?: { name: string; phone: string; email: string };
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, initialValues }) => {
  const [name, setName] = useState(initialValues?.name || '');
  const [phone, setPhone] = useState(initialValues?.phone || '');
  const [email, setEmail] = useState(initialValues?.email || '');

  const handleSubmit = () => {
    onSubmit({ name, phone, email });
    setName('');
    setPhone('');
    setEmail('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default ContactForm;