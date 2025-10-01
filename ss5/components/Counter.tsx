import React, { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                {/* Counter Display */}
                <View style={styles.displayContainer}>
                    <Text style={styles.label}>Count: {count}</Text>
                    
                </View>

                {/* Buttons Container */}
                <View style={styles.buttonsContainer}>
                    <Pressable 
                        style={({ pressed }) => [
                            styles.button,
                            styles.decrementButton,
                            pressed && styles.buttonPressed
                        ]}
                        onPress={() => setCount(count - 1)}
                    >
                        <Text style={styles.buttonText}>−</Text>
                    </Pressable>
                    <Pressable 
                        style={({ pressed }) => [
                            styles.button,
                            styles.incrementButton,
                            pressed && styles.buttonPressed
                        ]}
                        onPress={() => setCount(count + 1)}
                    >
                        <Text style={styles.buttonText}>+</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#F3F4F6',
        // justifyContent: 'center',
        // alignItems: 'center',
        // padding: 20,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 32,
        width: '100%',
        maxWidth: 400,
        // iOS shadow
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 20,
        shadowOffset: { width: 0, height: 3 },
        // Android elevation
        elevation: 8,
    },
    displayContainer: {
        alignItems: 'center',
        marginBottom: 32,
        paddingVertical: 24,
        backgroundColor: '#F9FAFB',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#E5E7EB',
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#6B7280',
        marginBottom: 8,
        textTransform: 'uppercase',
        letterSpacing: 1.5,
    },
    countText: {
        fontSize: 64,
        fontWeight: '800',
        color: '#1F2937',
        letterSpacing: -2,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    button: {
        flex: 1,
        paddingVertical: 16,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        // iOS shadow
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        // Android elevation
        elevation: 3,
    },
    decrementButton: {
        backgroundColor: '#EF4444',
    },
    incrementButton: {
        backgroundColor: '#10B981',
    },
    resetButton: {
        backgroundColor: '#6B7280',
    },
    buttonPressed: {
        // opacity: 0.7,
        // transform: [{ scale: 0.95 }],
    },
    buttonText: {
        // fontSize: 32,
        fontWeight: '700',
        color: '#FFFFFF',
    },
    resetText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFFFFF',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
});