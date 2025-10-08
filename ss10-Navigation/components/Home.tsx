import { navigate } from 'expo-router/build/global-state/routing'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

export default function Home({navigation}:any) {
  return (
    <View>
        <Text>Home</Text>
        <Pressable onPress={() => navigation.navigate('Detail')}>
            <Text>Go to Detail</Text>
        </Pressable>

    </View>
       
  
  )
}
