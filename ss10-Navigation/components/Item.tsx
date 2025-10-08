import { router } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface ItemProps {
  data: {
    id: string | number;
    name: string;
  }
}

export default function Item({data}: ItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{data.name}</Text>
      <Pressable 
        style={styles.button}
        onPress={() => router.push(`../detail/${data.id}`)}
      >
        <Text style={styles.buttonText}>Go to Detail</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
  }
});
