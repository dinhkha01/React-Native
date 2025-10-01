import React, { useState } from 'react';
import { FlatList, Pressable, TextInput, View, StyleSheet, Text } from 'react-native';
import TodoItem, { Todo } from './TodoItem';

export default function TodoList() {
    const [tasks, setTasks] = useState<Todo[]>([
        {id: 1, task: 'Di choi'},
        {id: 2, task: 'Di hoc'},
        {id: 3, task: 'Di lam'}
    ]);
    const [task, setTask] = useState('');

    const handleAddTask = () => {
        if(task.trim() === '') return;
        const newTask: Todo = {
            id: Date.now(),
            task: task
        }
        setTasks([...tasks, newTask]);
        setTask('');
    }

    const handleDeleteTask = (id: number) => {
        setTasks(tasks.filter(item => item.id !== id))
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>📝 Danh sách công việc</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder='Nhập việc cần làm...' 
                    placeholderTextColor="#9CA3AF"
                    value={task} 
                    onChangeText={setTask}
                />
                <Pressable 
                    style={styles.addButton}
                    onPress={handleAddTask}
                >
                    <Text style={styles.addButtonText}>Thêm</Text>
                </Pressable>
            </View>

            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <TodoItem task={item} onDelete={handleDeleteTask}/>}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F4F6',
        paddingTop: 60,
    },
    header: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1F2937',
    },
    inputContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginBottom: 20,
        gap: 10,
    },
    input: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 16,
        color: '#1F2937',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    addButton: {
        backgroundColor: '#3B82F6',
        borderRadius: 12,
        paddingHorizontal: 24,
        paddingVertical: 14,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#3B82F6',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
    },
    addButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    listContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
});