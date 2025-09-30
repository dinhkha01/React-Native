import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Bt6() {
    const [jobs, setJobs] = useState<string[]>(['lười','chơi','ngủ'])
    const [job, setJob] = useState('')

    const handleAddJob = () => {
        const trimmed = job.trim()
        if (!trimmed) return
        setJobs(prevJobs => [...prevJobs, trimmed])
        setJob('')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Danh sách công việc</Text>
            <View style={styles.inputRow}>
                <TextInput
                    style={styles.input}
                    placeholder='Nhập công việc mới'
                    value={job}
                    onChangeText={setJob}
                />
                <TouchableOpacity style={styles.addButton} onPress={handleAddJob}>
                    <Text style={styles.addButtonText}>Thêm</Text>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.listContainer}>
                {jobs.map((item, index) => (
                    <View
                        key={index}
                        style={[
                            styles.jobItem,
                            index % 2 === 0 ? styles.jobItemAltA : styles.jobItemAltB,
                        ]}
                    >
                        <Text style={styles.jobText}>{item}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>

      )
    }
const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: '#f7f7f7',
	},
	title: {
		fontSize: 20,
		fontWeight: '600',
		marginBottom: 12,
		color: '#111',
	},
	inputRow: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
		marginBottom: 12,
	},
	input: {
		flex: 1,
		height: 44,
		paddingHorizontal: 12,
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 10,
		backgroundColor: '#fff',
	},
	addButton: {
		height: 44,
		paddingHorizontal: 16,
		borderRadius: 10,
		backgroundColor: '#007aff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	addButtonText: {
		color: '#fff',
		fontWeight: '600',
		fontSize: 16,
	},
	listContainer: {
		gap: 8,
		paddingBottom: 24,
	},
	jobItem: {
		paddingVertical: 12,
		paddingHorizontal: 14,
		borderRadius: 12,
	},
	jobItemAltA: {
		backgroundColor: '#e8f0fe',
	},
	jobItemAltB: {
		backgroundColor: '#eaf7e9',
	},
	jobText: {
		fontSize: 16,
		color: '#222',
	},
})
