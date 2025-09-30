import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from './Card'
export default function Bt1() {
   
  return (
    <View style={styles.screen}>
        <Text style={styles.title}>Danh sách người dùng</Text>
        <Card
        img='https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/286791746_715126952939349_2863510425811172870_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=-Fqu7gmhXuUQ7kNvwF2DKCv&_nc_oc=AdkIBpeFOemLYADiTsYZ0vuLpKGNWEtjlH3NpzE0F0z2vBV6Sws2Po1QIvWDwbF8IxLOLRO2oYY3cAEkLLdDLv_l&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=rxdFM-A4HCPIYqiXel0Slw&oh=00_AfYNzMRIMseNcQpRV8C-X5MHxjkTZNuO4cCWTjHxLmBdYA&oe=68E1B822'
        name='Phuoc'
        email='phuocde@gmail.com'
        />
            <Card
        img='https://i.pravatar.cc/150?u=2'
        name='hung'
        email='hung@gmail.com'
        />
     
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#EEF2F7',
    paddingTop: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 12,
    color: '#0F172A',
  },
})