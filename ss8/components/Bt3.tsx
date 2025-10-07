import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState, useEffect } from 'react'
import { Pressable, Text, View, StyleSheet } from 'react-native'

export default function Bt3() {
    const [count, setCount] = useState(0)
    // Lưu giá trị đếm vào AsyncStorage
    const saveCount = async (newCount: number) => {
        try {
            await AsyncStorage.setItem('count', newCount.toString());
            setCount(newCount);
        } catch (error) {
            console.error('Lỗi khi lưu giá trị:', error);
        }
    };

    // Đọc giá trị từ AsyncStorage khi khởi động
    const loadCount = async () => {
        try {
            const value = await AsyncStorage.getItem('count');
            if (value !== null) {
                setCount(Number(value));
            }
        } catch (error) {
            console.error('Lỗi khi đọc giá trị:', error);
        }
    };

    // Load giá trị ban đầu
    useEffect(() => {
        loadCount();
    }, []);

    // Tăng giá trị
    const increaseCount = () => {
        saveCount(count + 1);
    };

    // Giảm giá trị
    const decreaseCount = () => {
        saveCount(count - 1);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bộ đếm</Text>
            <Text style={styles.counter}>{count}</Text>
            <View style={styles.buttonContainer}>
                <Pressable 
                    style={styles.button} 
                    onPress={decreaseCount}
                >
                    <Text style={styles.buttonText}>-</Text>
                </Pressable>
                <Pressable 
                    style={styles.button} 
                    onPress={increaseCount}
                >
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    counter: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#2196F3',
        marginBottom: 30,
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 20,
    },
    button: {
        backgroundColor: '#2196F3',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttonText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

