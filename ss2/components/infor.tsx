import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Infor() {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://www.facebook.com/photo/?fbid=1346899133462854&set=a.203722391113873' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Nguyễn Văn A</Text>
        <Text style={styles.subtitle}>React Native Developer | UI/UX Enthusiast</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    width: '90%',
    maxWidth: 360,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    // Shadow for Android
    elevation: 4,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222222',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
})
