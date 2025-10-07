import React, { useState } from 'react'
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

export default function Bt4() {
    const [email,setEmail] = useState('')
    const [mk,setMk] = useState('')
   
  return (
    <View style={styles.container}>
            <Text style={styles.title}>Đăng Nhập</Text>
            <TextInput
              placeholder='Nhập email'
              placeholderTextColor={'#9CA3AF'}
              onChangeText={setEmail}
              value={email}
              style={styles.input}
              keyboardType='email-address'
              autoCapitalize='none'
            />
            <TextInput
              placeholder='Nhập mật khẩu'
              placeholderTextColor={'#9CA3AF'}
              onChangeText={setMk}
              value={mk}
              secureTextEntry={true}
              style={styles.input}
            />
            <Pressable style={styles.button} onPress={()=> Alert.alert(`email:${email} - mk:${mk}` )}>
                <Text style={styles.buttonText}>Đăng nhập</Text>
            </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6FBFF',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 24,
    color: '#0F172A',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: '#111827',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#3B82F6',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
    // iOS shadow
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    // Android elevation
    elevation: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
})