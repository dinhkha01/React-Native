import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View, SafeAreaView } from 'react-native'
import CardList from './CardList'

export interface Task {
    id: number,
    name: string
}

export default function Bt6() {
    const [tasks, setTasks] = useState<Task[]>([])
    const [newTask, setNewTask] = useState<string>('')

    const addTask = () => {
        if (newTask.trim() === '') return

        const objTask: Task = {
            id: Date.now(),
            name: newTask
        }
        setTasks([...tasks, objTask])
        setNewTask('')
    }

    const deletee = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>📝 Todo List</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder='Thêm task mới...' 
                    placeholderTextColor="#999"
                    value={newTask} 
                    onChangeText={setNewTask}
                />
                <Pressable 
                    style={styles.addButton}
                    onPress={addTask}
                >
                    <Text style={styles.addButtonText}>Thêm</Text>
                </Pressable>
            </View>

            <View style={styles.listContainer}>
                <Text style={styles.taskCount}>
                    {tasks.length} task{tasks.length !== 1 ? 's' : ''}
                </Text>
                <CardList 
                    data={tasks}
                    deletee={deletee}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: '#4a90e2',
        padding: 20,
        paddingTop: 40,
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        gap: 10,
    },
    input: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 12,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    addButton: {
        backgroundColor: '#4a90e2',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    listContainer: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 8,
    },
    taskCount: {
        padding: 16,
        fontSize: 14,
        color: '#666',
        fontWeight: '500',
    },
})