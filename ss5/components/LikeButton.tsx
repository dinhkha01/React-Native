import React, { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View, Animated } from 'react-native';

export default function LikeButton() {
    const [liked, setLiked] = useState(false);
    const [scaleValue] = useState(new Animated.Value(1));

    const handlePress = () => {
        // Animation khi nhấn
        Animated.sequence([
            Animated.timing(scaleValue, {
                toValue: 1.2,
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.timing(scaleValue, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
            }),
        ]).start();

        setLiked(!liked);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <Pressable 
                    onPress={handlePress}
                    style={({ pressed }) => [
                        styles.button,
                        liked ? styles.buttonLiked : styles.buttonUnliked,
                        pressed && styles.buttonPressed
                    ]}
                >
                    <Animated.View style={[
                        styles.buttonContent,
                        { transform: [{ scale: scaleValue }] }
                    ]}>
                        {/* Icon trái tim */}
                        <Text style={styles.heartIcon}>
                            {liked ? '❤️' : '🤍'}
                        </Text>
                        
                        {/* Text */}
                        <Text style={[
                            styles.buttonText,
                            liked ? styles.textLiked : styles.textUnliked
                        ]}>
                            {liked ? 'Đã thích' : 'Thích'}
                        </Text>
                    </Animated.View>
                </Pressable>

                {/* Số lượt thích giả lập */}
                <Text style={styles.likeCount}>
                    {liked ? '124' : '123'} lượt thích
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#F9FAFB',
        // justifyContent: 'center',
        // alignItems: 'center',
        // padding: 20,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 24,
        alignItems: 'center',
        width: '100%',
        maxWidth: 300,
        // iOS shadow
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 16,
        shadowOffset: { width: 0, height: 4 },
        // Android elevation
        elevation: 5,
    },
    button: {
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 50,
        borderWidth: 2,
        minWidth: 160,
        // iOS shadow
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        // Android elevation
        elevation: 3,
    },
    buttonUnliked: {
        backgroundColor: '#FFFFFF',
        borderColor: '#E5E7EB',
    },
    buttonLiked: {
        backgroundColor: '#FEE2E2',
        borderColor: '#EF4444',
    },
    buttonPressed: {
        opacity: 0.8,
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    heartIcon: {
        fontSize: 24,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: 0.3,
    },
    textUnliked: {
        color: '#6B7280',
    },
    textLiked: {
        color: '#EF4444',
    },
    likeCount: {
        marginTop: 16,
        fontSize: 14,
        fontWeight: '600',
        color: '#9CA3AF',
        letterSpacing: 0.2,
    },
});