import { Feather } from '@expo/vector-icons'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function SocialPost() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Nguyễn Văn A</Text>
      </View>

      {/* Content image */}
      <Image
        source={{
          uri:
            'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop',
        }}
        style={styles.postImage}
      />

      {/* Action Bar */}
      <View style={styles.actionBar}>
        <View style={styles.actionGroupLeft}>
          <Feather name="heart" color="#111827" size={24} />
          <Feather name="message-circle" color="#111827" size={24} />
          <Feather name="send" color="#111827" size={24} />
        </View>
        <View style={styles.actionGroupRight}>
          <Text style={{fontSize: 18}}>🌊</Text>
          <Text style={{fontSize: 18}}>☀️</Text>
        </View>
      </View>

      {/* Description */}
      <Text style={styles.description}>
        Khám phá vẻ đẹp thiên nhiên hùng vĩ giữa núi rừng và biển xanh. #nature
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  postImage: {
    width: '100%',
    aspectRatio: 4 / 3,
    borderRadius: 12,
    marginBottom: 12,
  },
  actionBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  actionGroupLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  actionGroupRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  description: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
})


