import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Bt2() {
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        // Set up the interval
        const intervalId = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.timeText}>
                {currentTime.toLocaleTimeString()}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    timeText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#333',
    }
})