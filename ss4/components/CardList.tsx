import React from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { Task } from './Bt6'

type Props = {
    data: Task[]
    deletee: (id: number) => void
}

export default function CardList({ data, deletee }: Props) {
    if (data.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>✨ Chưa có task nào</Text>
                <Text style={styles.emptySubtext}>Thêm task mới để bắt đầu!</Text>
            </View>
        )
    }

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.taskItem}>
                    <View style={styles.taskContent}>
                        <View style={styles.bullet} />
                        <Text style={styles.taskText}>{item.name}</Text>
                    </View>
                    <Pressable 
                        style={styles.deleteButton}
                        onPress={() => deletee(item.id)}
                    >
                        <Text style={styles.deleteButtonText}>Xóa</Text>
                    </Pressable>
                </View>
            )}
            contentContainerStyle={styles.listContent}
        />
    )
}

const styles = StyleSheet.create({
    listContent: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    taskItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
        marginBottom: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#e8e8e8',
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    taskContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    bullet: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#4a90e2',
    },
    taskText: {
        fontSize: 16,
        color: '#333',
        flex: 1,
    },
    deleteButton: {
        backgroundColor: '#ff4757',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 6,
    },
    deleteButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 60,
    },
    emptyText: {
        fontSize: 20,
        color: '#999',
        marginBottom: 8,
    },
    emptySubtext: {
        fontSize: 14,
        color: '#ccc',
    },
})