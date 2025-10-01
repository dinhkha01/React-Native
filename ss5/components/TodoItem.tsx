import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export interface Todo {
    id: number;
    task: string;
}

type Props = {
    task: Todo;
    onDelete: (id: number) => void;
}

export default function TodoItem({ task, onDelete }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.taskContent}>
                <View style={styles.checkbox} />
                <Text style={styles.taskText}>{task.task}</Text>
            </View>
            
            <Pressable 
                style={styles.deleteButton}
                onPress={() => onDelete(task.id)}
            >
                <Text style={styles.deleteButtonText}>✕</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    taskContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#D1D5DB',
        backgroundColor: '#F9FAFB',
    },
    taskText: {
        flex: 1,
        fontSize: 16,
        color: '#1F2937',
        lineHeight: 22,
    },
    deleteButton: {
        width: 32,
        height: 32,
        borderRadius: 8,
        backgroundColor: '#FEE2E2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteButtonText: {
        color: '#EF4444',
        fontSize: 18,
        fontWeight: '600',
    },
});