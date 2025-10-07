
import { useNetInfo } from '@react-native-community/netinfo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Bt4() {
    const netInfo = useNetInfo();

    return (
        <View style={styles.container}>
            {!netInfo.isConnected && (
                <View style={styles.offlineBanner}>
                    <Text style={styles.offlineText}>
                        Không có kết nối mạng!
                    </Text>
                </View>
            )}
            
            <View style={styles.infoContainer}>
                <Text style={styles.title}>Thông tin kết nối mạng</Text>
                
                <View style={styles.infoRow}>
                    <Text style={styles.label}>Trạng thái:</Text>
                    <Text style={styles.value}>
                        {netInfo.isConnected ? 'Đã kết nối' : 'Mất kết nối'}
                    </Text>
                </View>

                <View style={styles.infoRow}>
                    <Text style={styles.label}>Loại kết nối:</Text>
                    <Text style={styles.value}>
                        {netInfo.type === 'wifi' ? 'WiFi' : 
                         netInfo.type === 'cellular' ? 'Dữ liệu di động' : 
                         netInfo.type}
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    offlineBanner: {
        backgroundColor: '#ff3b30',
        padding: 10,
        alignItems: 'center',
    },
    offlineText: {
        color: 'white',
        fontWeight: 'bold',
    },
    infoContainer: {
        padding: 20,
        gap: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        width: 120,
    },
    value: {
        fontSize: 16,
        flex: 1,
    },
});