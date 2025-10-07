import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Switch, Text, View, StyleSheet } from 'react-native';

export default function Bt2() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Hàm lưu trạng thái vào AsyncStorage
    const saveTheme = async (value: boolean) => {
        try {
            await AsyncStorage.setItem('isDarkMode', JSON.stringify(value));
            setIsDarkMode(value);
        } catch (error) {
            console.error('Lỗi khi lưu trạng thái:', error);
        }
    };

    // Hàm đọc trạng thái từ AsyncStorage khi khởi động
    const loadTheme = async () => {
        try {
            const storedValue = await AsyncStorage.getItem('isDarkMode');
            if (storedValue !== null) {
                setIsDarkMode(JSON.parse(storedValue));
            }
        } catch (error) {
            console.error('Lỗi khi đọc trạng thái:', error);
        }
    };

    // Đọc trạng thái khi component mount
    useEffect(() => {
        loadTheme();
    }, []);

    return (
        <View style={[styles.container, { backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff' }]}>
            <View style={styles.content}>
                <Text style={[styles.text, { color: isDarkMode ? '#ffffff' : '#000000' }]}>
                    {isDarkMode ? 'Chế độ tối' : 'Chế độ sáng'}
                </Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={saveTheme}
                    value={isDarkMode}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text: {
        fontSize: 18,
        marginRight: 10,
        fontWeight: '500',
    }
});

