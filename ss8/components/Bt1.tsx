import { default as AsyncStoregage } from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

export default function Bt1() {
    const [text, setOnChangeText] = useState("");

    const [name,setName] = useState("")

    const inPutName =async (text:string) => {
            await AsyncStoregage.setItem("name",JSON.stringify(text))
            console.log("Lưu thành công")
            setOnChangeText("")

    }

    const outPutName = async () => {
        // AsyncStoregage.clear()
        const data = await AsyncStoregage.getItem("name")
        const name = data ? JSON.parse(data) : null
        setName(name)
        
      }
  useEffect(() => {

    outPutName()
  }, [])

  return (
    <View>
      {name ? (
        <>
        <Pressable onPress={() => AsyncStoregage.removeItem("name")}>
          <Text>Restart</Text>
        </Pressable>
        <Text>Xin chào, {name}!</Text>
        </>
      ) : (
        <>
          <TextInput placeholder='Nhập tên' value={text} onChangeText={setOnChangeText} />
          <Pressable onPress={() => inPutName(text)}>
            <Text>Submit</Text>
          </Pressable>
        </>
      )}
    </View>
  )
}
