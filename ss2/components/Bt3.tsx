import { Text } from '@react-navigation/elements'
import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'


export default function Bt3() {
  return (
 <View  style={styles.container}>
    <Text>Ho Ten</Text>
    <TextInput placeholder='Nhap ho ten' style={styles.input}/>
 </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  input:{
    width:'20%',
    height:40,
    borderWidth:1,
    borderColor:'#000',
    borderRadius:10,
    paddingHorizontal:10,
    marginVertical:10
  }

})