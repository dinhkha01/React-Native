import React, { useState } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

export default function Bt3() {
    const [check, setCheck] = useState(true)
   
  return (
    <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: check
            ? 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/548616206_122180093858589100_1490299828533829706_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Sc88yMv0P1wQ7kNvwEdAmBV&_nc_oc=AdlHcjzfFgu8GChUNTyoKmZZanAzsWz3hTTSess0Iq3GAnXc97wOBZbMqZoCxaKRXYFcBhSb-4uT8-nmkRY8Bny0&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=mpvWY9UvZN43B8ZTBIN4Sw&oh=00_Afbq2KJqlw0GtQZWnPPeHdKl0YRnLDZnK3V0JT08bqux0Q&oe=68E1A7FA'
            : 'https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/555705952_1331692491649215_7436420655870250409_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=D6b8YCms5X8Q7kNvwFDbxNx&_nc_oc=Adl2Y1p9LXUBRjFBxinzduA60BTR-FLKh5wJn78Qfc4LB_a3biKzoWQrhPDNrlzc9xb2wxIyfUKM8y2vKacrTViq&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=k2lOiRW73O7r2CaTArKBUA&oh=00_AfZjc8yzqH8mUffP-5VsphE_0sOiRgLlpQsF3-Qr3-8sZg&oe=68E1B274'}}
        />
        <Pressable style={styles.button} onPress={() => setCheck(!check)}>
          <Text style={styles.buttonText}>{check ? 'bat' : 'tat'}</Text>
        </Pressable>
     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 240,
    height: 240,
    borderRadius: 12,
    marginBottom: 16,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#111827',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
})