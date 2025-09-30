import React, { useRef, useState } from 'react'
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

type ChatMessage = {
	id: string
	text: string
	sender: 'me' | 'other'
}

export default function Chat() {
	const [messages, setMessages] = useState<ChatMessage[]>([
		{ id: '1', text: 'Xin chào! 👋', sender: 'other' },
		{ id: '2', text: 'Chào bạn, khỏe không?', sender: 'me' },
		{ id: '3', text: 'Mình ổn, cảm ơn! 😊', sender: 'other' },
	])
	const [draft, setDraft] = useState('')
	const scrollRef = useRef<ScrollView | null>(null)

	const handleSend = () => {
		const content = draft.trim()
		if (!content) return
		const newMessage: ChatMessage = {
			id: `${Date.now()}`,
			text: content,
			sender: 'me',
		}
		setMessages(prev => [...prev, newMessage])
		setDraft('')
		requestAnimationFrame(() => {
			scrollRef.current?.scrollToEnd({ animated: true })
		})
	}

	return (
		<SafeAreaView style={styles.safeArea}>
			<KeyboardAvoidingView
				style={styles.flex}
				behavior={Platform.select({ ios: 'padding', android: undefined })}
				keyboardVerticalOffset={Platform.OS === 'ios' ? 8 : 0}
			>
				<View style={styles.container}>
					<ScrollView
						ref={ref => (scrollRef.current = ref)}
						contentContainerStyle={styles.messagesContainer}
						onContentSizeChange={() => scrollRef.current?.scrollToEnd({ animated: true })}
					>
						{messages.map(msg => (
							<View
								key={msg.id}
								style={[
									styles.bubble,
									msg.sender === 'me' ? styles.bubbleRight : styles.bubbleLeft,
								]}
							>
								<Text style={msg.sender === 'me' ? styles.textRight : styles.textLeft}>{msg.text}</Text>
							</View>
						))}
					</ScrollView>

					<View style={styles.composerWrapper}>
						<View style={styles.composer}>
							<TextInput
								style={styles.input}
								placeholder='Nhập tin nhắn...'
								value={draft}
								onChangeText={setDraft}
								multiline
							/>
							<TouchableOpacity style={styles.sendButton} onPress={handleSend}>
								<Text style={styles.sendButtonText}>Gửi</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</KeyboardAvoidingView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#f7f7f7',
	},
	flex: { flex: 1 },
	container: {
		flex: 1,
	},
	messagesContainer: {
		padding: 12,
		paddingBottom: 100,
		gap: 8,
	},
	bubble: {
		maxWidth: '78%',
		borderRadius: 16,
		paddingVertical: 8,
		paddingHorizontal: 12,
	},
	bubbleLeft: {
		alignSelf: 'flex-start',
		backgroundColor: '#ffffff',
		borderTopLeftRadius: 4,
		borderTopRightRadius: 16,
		borderBottomLeftRadius: 4,
		borderBottomRightRadius: 16,
	},
	bubbleRight: {
		alignSelf: 'flex-end',
		backgroundColor: '#007aff',
		borderTopLeftRadius: 16,
		borderTopRightRadius: 4,
		borderBottomLeftRadius: 16,
		borderBottomRightRadius: 4,
	},
	textLeft: {
		color: '#111',
		fontSize: 16,
		lineHeight: 22,
	},
	textRight: {
		color: '#fff',
		fontSize: 16,
		lineHeight: 22,
	},
	composerWrapper: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		paddingHorizontal: 12,
		paddingBottom: 12,
	},
	composer: {
		backgroundColor: '#ffffff',
		borderRadius: 12,
		padding: 12,
		gap: 8,
		shadowColor: '#000',
		shadowOpacity: 0.08,
		shadowRadius: 8,
		shadowOffset: { width: 0, height: 2 },
		elevation: 2,
	},
	input: {
		minHeight: 40,
		maxHeight: 120,
		borderWidth: 1,
		borderColor: '#e6e6e6',
		borderRadius: 8,
		paddingHorizontal: 10,
		paddingVertical: 8,
		backgroundColor: '#fafafa',
	},
	sendButton: {
		height: 44,
		borderRadius: 8,
		backgroundColor: '#007aff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	sendButtonText: {
		color: '#fff',
		fontWeight: '600',
		fontSize: 16,
	},
})


