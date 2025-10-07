import React, { useRef } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

export default function Bt3() {
  const inputRef = useRef<TextInput>(null)

  const handleFocus = () => {
    inputRef.current?.focus()
  }

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder="Nhập văn bản ở đây..."
      />
      <Button
        title="Focus vào ô nhập liệu"
        onPress={handleFocus}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    gap: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  }
})
