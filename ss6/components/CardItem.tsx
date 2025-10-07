import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = {
    nameEmployee: string;
}

export default function CardItem({ nameEmployee }: Props) {
  return (
   <View style={styles.card}>
        <Text style={styles.name}>{nameEmployee}</Text>
   </View>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, // cho Android
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    }
})