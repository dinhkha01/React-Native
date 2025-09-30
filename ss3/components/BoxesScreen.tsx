import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export default function BoxesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.screenContainer}>
      <Text style={styles.header}>Lần 1: Dọc, căn giữa ngang</Text>
      <View style={styles.section1}>
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.box3]} />
        <View style={[styles.box, styles.box4]} />
        <View style={[styles.box, styles.box5]} />
      </View>

      <Text style={styles.header}>Lần 2: Ngang, giãn đều, căn giữa dọc</Text>
      <View style={styles.section2Wrapper}>
        <View style={styles.section2}>
          <View style={[styles.box, styles.box1]} />
          <View style={[styles.box, styles.box2]} />
          <View style={[styles.box, styles.box3]} />
          <View style={[styles.box, styles.box4]} />
          <View style={[styles.box, styles.box5]} />
        </View>
      </View>

      <Text style={styles.header}>Lần 3: 3 box trên, 2 box dưới, căn đều</Text>
      <View style={styles.section3}>
        <View style={styles.rowBetween}>
          <View style={[styles.box, styles.box1]} />
          <View style={[styles.box, styles.box2]} />
          <View style={[styles.box, styles.box3]} />
        </View>
        <View style={styles.rowBetween}>
          <View style={[styles.box, styles.box4]} />
          <View style={[styles.box, styles.box5]} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    padding: 16,
    gap: 16,
  },
  header: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  box: {
    borderRadius: 8,
  },
  // Lần 1: dọc, căn giữa ngang
  section1: {
    alignItems: 'center',
    gap: 12,
  },
  // Lần 2: ngang, giãn đều, căn giữa dọc
  section2Wrapper: {
    height: 140,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    // Android shadow
    elevation: 2,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  section2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  // Lần 3: 3 trên, 2 dưới
  section3: {
    gap: 12,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  // Colors and sizes
  box1: { backgroundColor: '#EF4444', width: 100, height: 40 },
  box2: { backgroundColor: '#F97316', width: 80, height: 50 },
  box3: { backgroundColor: '#22C55E', width: 120, height: 60 },
  box4: { backgroundColor: '#3B82F6', width: 90, height: 30 },
  box5: { backgroundColor: '#8B5CF6', width: 110, height: 55 },
})


