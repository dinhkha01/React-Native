import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

type props = {
    img: string;
    nameUser: string;
    job: string;
    sdt: string;
}

export default function BusinessCard({ img, nameUser, job, sdt }: props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                {/* Avatar with gradient border effect */}
                <View style={styles.avatarContainer}>
                    <View style={styles.avatarBorder}>
                        <Image source={{ uri: img }} style={styles.avatar} />
                    </View>
                </View>

                {/* User Information */}
                <View style={styles.infoContainer}>
                    <Text style={styles.nameText}>{nameUser}</Text>
                    <Text style={styles.jobText}>{job}</Text>
                    <View style={styles.contactContainer}>
                        <View style={styles.phoneBadge}>
                            <Text style={styles.phoneIcon}>📞</Text>
                            <Text style={styles.phoneText}>{sdt}</Text>
                        </View>
                    </View>
                </View>

                {/* Decorative element */}
                <View style={styles.decorativeCircle} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        marginHorizontal: 16,
        marginVertical: 8,
        // iOS shadow
        shadowColor: '#4F46E5',
        shadowOpacity: 0.15,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
        // Android elevation
        elevation: 5,
        borderWidth: 1,
        borderColor: '#F3F4F6',
        overflow: 'hidden',
        position: 'relative',
    },
    avatarContainer: {
        marginRight: 16,
    },
    avatarBorder: {
        padding: 3,
        borderRadius: 35,
        backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderWidth: 2,
        borderColor: '#E0E7FF',
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        borderWidth: 3,
        borderColor: '#FFFFFF',
    },
    infoContainer: {
        // flex: 'row',
        flexDirection: 'column',
        alignItems: 'flex-start',
        // alignItems: 'center',
        // flex: 1, 
        // justifyContent: 'center',
    },
    nameText: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1F2937',
        marginBottom: 4,
        letterSpacing: 0.3,
    },
    jobText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#6B7280',
        marginBottom: 8,
        letterSpacing: 0.2,
    },
    contactContainer: {
        marginTop: 4,
    },
    phoneBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EEF2FF',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 12,
        alignSelf: 'flex-start',
    },
    phoneIcon: {
        fontSize: 12,
        marginRight: 6,
    },
    phoneText: {
        fontSize: 13,
        fontWeight: '600',
        color: '#4F46E5',
        letterSpacing: 0.3,
    },
    decorativeCircle: {
        position: 'absolute',
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#EEF2FF',
        opacity: 0.3,
        top: -40,
        right: -40,
    },
});