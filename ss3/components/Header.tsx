import React from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'

type HeaderProps = {
  title: string
}

export default function Header({ title }: HeaderProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle={Platform.select({ ios: 'dark-content', android: 'light-content' })}
        backgroundColor={Platform.select({ android: '#1976D2', ios: undefined })}
      />
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: Platform.select({ ios: '#FFFFFF', android: '#1976D2' }),
  },
  container: {
    height: 56,
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: Platform.select({ ios: '#FFFFFF', android: '#1976D2' }),
    borderBottomWidth: Platform.select({ ios: StyleSheet.hairlineWidth, android: 0 }),
    borderBottomColor: Platform.select({ ios: '#E5E7EB', android: 'transparent' }),
    // iOS subtle shadow
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  title: {
    color: Platform.select({ ios: '#111827', android: '#FFFFFF' }),
    fontSize: 18,
    fontWeight: '600',
    textAlign: Platform.select({ ios: 'center', android: 'left' }),
  },
})


