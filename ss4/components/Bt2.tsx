import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Bt2() {
  const [count, setCount] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{count}</Text>
      <View style={styles.buttonsRow}>
        <TouchableOpacity onPress={() => setCount(count - 1)} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCount(count + 1)} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6FBFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    fontSize: 96,
    fontWeight: '800',
    color: '#2D2D2D',
    marginBottom: 32,
  },
  buttonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 32,
  },
  button: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
    // iOS shadow
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    // Android
    elevation: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: '700',
    lineHeight: 36,
  },
})