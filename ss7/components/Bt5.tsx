import React, { useReducer, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

// Define the Todo type
type Todo = {
    id: number;
    name: string;
    completed: boolean;
};

// Define action types
type Action =
    | { type: 'ADD_TODO'; payload: string }
    | { type: 'TOGGLE_TODO'; payload: number }
    | { type: 'DELETE_TODO'; payload: number };

// Reducer function
const todoReducer = (state: Todo[], action: Action): Todo[] => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: Date.now(),
                    name: action.payload,
                    completed: false,
                },
            ];
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
};

export default function Bt5() {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            dispatch({ type: 'ADD_TODO', payload: newTodo.trim() });
            setNewTodo('');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Danh sách công việc</Text>
            
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={newTodo}
                    onChangeText={setNewTodo}
                    placeholder="Thêm công việc mới..."
                />
                <Pressable style={styles.addButton} onPress={handleAddTodo}>
                    <Text style={styles.buttonText}>Thêm</Text>
                </Pressable>
            </View>

            <FlatList
                data={todos}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.todoItem}>
                        <Pressable
                            style={styles.todoText}
                            onPress={() => dispatch({ type: 'TOGGLE_TODO', payload: item.id })}
                        >
                            <Text style={[
                                styles.todoName,
                                item.completed && styles.completedTodo
                            ]}>
                                {item.name}
                            </Text>
                        </Pressable>
                        <Pressable
                            style={styles.deleteButton}
                            onPress={() => dispatch({ type: 'DELETE_TODO', payload: item.id })}
                        >
                            <Text style={styles.deleteText}>Xóa</Text>
                        </Pressable>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        gap: 10,
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: 'white',
    },
    addButton: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 20,
        justifyContent: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
    },
    todoItem: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    todoText: {
        flex: 1,
    },
    todoName: {
        fontSize: 16,
    },
    completedTodo: {
        textDecorationLine: 'line-through',
        color: '#999',
    },
    deleteButton: {
        backgroundColor: '#ff3b30',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
    },
    deleteText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
    },
});