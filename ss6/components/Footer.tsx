import React from 'react'
import { Pressable, Text, View } from 'react-native'


export default function Footer() {
  return (
   <View>
    <Pressable style={{backgroundColor:'blue', padding:10, margin:10, borderRadius:5, alignItems:'center'}}>
        <Text>
            Tải thêm
        </Text>

    </Pressable>
    
   </View>
  )
}
