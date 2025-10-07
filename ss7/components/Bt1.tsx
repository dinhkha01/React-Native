import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function Bt1() {
    const [count, setCount] = useState(0)
    return (
        <View style={styles.container}>
            <Text style={styles.countText}>{count}</Text>
            <View style={styles.buttonContainer}>
                <Pressable 
                    style={styles.button} 
                    onPress={() => setCount(count + 1)}
                >
                    <Text style={styles.buttonText}>Tăng</Text>
                </Pressable>
                <Pressable 
                    style={styles.button} 
                    onPress={() => setCount(count - 1)}
                >
                    <Text style={styles.buttonText}>Giảm</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    countText: {
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 20,
    },
    button: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        elevation: 3,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    }
})