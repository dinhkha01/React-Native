
import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, Pressable } from 'react-native'

export default function Bt2() {
    const [count,setCount] = useState(0)
  return (
    <View style={styles.all}>
      <Text>{count}</Text>
      <View style={styles.button}>
        <Pressable onPress={()=> setCount(count + 1)} style={styles.tang}> 
            <Text >Tăng</Text>
          </Pressable>
        <Pressable onPress={()=> setCount(count - 1)} style={styles.giam}>
            <Text>Giảm</Text>
        </Pressable> 
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  all:{
   flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  button:{
    marginTop: 20,
    flexDirection:'row',
    alignItems:'center',
  },
  tang:{
    margin:10,
    backgroundColor:'green',
    padding:10,
    borderRadius:10,

  },
  giam:{
    margin:10,
    backgroundColor:'red',
    padding:10,
    borderRadius:10,

  }

  
})