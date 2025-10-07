import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'

export default function Bt5() {
  return (
   <SafeAreaView style={styles.container}>
        <Image source={{uri:'https://reactnative.dev/img/tiny_logo.png'}} style={styles.avatar}/>
        <Text>Hello Baby</Text>
        <Text>Dang nhap</Text>
        <TextInput placeholder='Nhap Email' style={styles.input}/>
         <TextInput placeholder='Nhap mat khau' style={styles.input}/>
          <TouchableOpacity onPress={() => console.log('hellooo')} style={styles.button}>
            <Text style={styles.input} >Dang Nhap</Text>
         </TouchableOpacity>
   </SafeAreaView>
  
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    resizeMode: 'cover',
    marginBottom: 16,
  },
 input:{
    width:'50%',
    height:40,
    borderWidth:1,
    borderColor:'#000',
    borderRadius:10,
    paddingHorizontal:10,
    marginVertical:10
  },
  button:{
    margin:10,
    backgroundColor:'blue',
    padding:10,
    borderRadius:10,
  },
  text:{
    color:'white'
  }

})
