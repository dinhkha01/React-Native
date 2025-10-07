import { COLORS, CONTAINER_STYLES, FONT_SIZES, SPACING } from '@/styles/GlobalStyles'
import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://rikkei.edu.vn/wp-content/uploads/2024/12/logo-rikkei2.png' }}
        style={styles.logo}
        resizeMode="contain"
      />

      <TextInput
        placeholder="Tên đăng nhập"
        placeholderTextColor="#9CA3AF"
        style={styles.input}
      />

      <TextInput
        placeholder="Mật khẩu"
        placeholderTextColor="#9CA3AF"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...CONTAINER_STYLES.screen,
  },
  logo: {
    width: 300,
    height: 110,
    marginBottom: SPACING.xl,
  },
  input: {
    width: '88%',
    height: 48,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.surface,
    borderRadius: 10,
    paddingHorizontal: SPACING.sm + 2,
    marginBottom: SPACING.sm + 2,
  },
  button: {
    width: '88%',
    height: 48,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SPACING.sm,
  },
  buttonText: {
    color: COLORS.surface,
    fontSize: FONT_SIZES.large,
    fontWeight: '700',
  },
})


