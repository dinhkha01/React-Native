import React, { useState } from 'react';
import { Alert, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        if (!email || !pass) {
            Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ thông tin!');
            return;
        }
        Alert.alert('Đăng nhập thành công', `Email: ${email}\nMật khẩu: ${'•'.repeat(pass.length)}`);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.title}>Đăng Nhập</Text>
                    <Text style={styles.subtitle}>Chào mừng bạn trở lại!</Text>
                </View>

                {/* Form */}
                <View style={styles.form}>
                    {/* Email Input */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email</Text>
                        <View style={styles.inputWrapper}>
                            <Text style={styles.inputIcon}>📧</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='example@email.com'
                                placeholderTextColor='#9CA3AF'
                                value={email}
                                onChangeText={setEmail}
                                keyboardType='email-address'
                                autoCapitalize='none'
                            />
                        </View>
                    </View>

                    {/* Password Input */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Mật khẩu</Text>
                        <View style={styles.inputWrapper}>
                            <Text style={styles.inputIcon}>🔒</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Nhập mật khẩu'
                                placeholderTextColor='#9CA3AF'
                                value={pass}
                                onChangeText={setPass}
                                secureTextEntry={!showPassword}
                            />
                            <Pressable 
                                onPress={() => setShowPassword(!showPassword)}
                                style={styles.eyeButton}
                            >
                                <Text style={styles.eyeIcon}>
                                    {showPassword ? '👁️' : '👁️‍🗨️'}
                                </Text>
                            </Pressable>
                        </View>
                    </View>

                    {/* Forgot Password */}
                    <Pressable style={styles.forgotButton}>
                        <Text style={styles.forgotText}>Quên mật khẩu?</Text>
                    </Pressable>

                    {/* Login Button */}
                    <Pressable 
                        onPress={handleLogin}
                        style={({ pressed }) => [
                            styles.loginButton,
                            pressed && styles.loginButtonPressed
                        ]}
                    >
                        <Text style={styles.loginButtonText}>Đăng Nhập</Text>
                    </Pressable>

                    {/* Divider */}
                    <View style={styles.divider}>
                        <View style={styles.dividerLine} />
                        <Text style={styles.dividerText}>HOẶC</Text>
                        <View style={styles.dividerLine} />
                    </View>

                    {/* Social Login Buttons */}
                    <View style={styles.socialContainer}>
                        <Pressable style={styles.socialButton}>
                            <Text style={styles.socialIcon}>🔵</Text>
                            <Text style={styles.socialText}>Facebook</Text>
                        </Pressable>
                        <Pressable style={styles.socialButton}>
                            <Text style={styles.socialIcon}>🔴</Text>
                            <Text style={styles.socialText}>Google</Text>
                        </Pressable>
                    </View>

                    {/* Sign Up Link */}
                    <View style={styles.signupContainer}>
                        <Text style={styles.signupText}>Chưa có tài khoản? </Text>
                        <Pressable>
                            <Text style={styles.signupLink}>Đăng ký ngay</Text>
                        </Pressable>
                    </View>
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
        // padding: 20,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 24,
        // iOS shadow
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 20,
        shadowOffset: { width: 0, height: 8 },
        // Android elevation
        elevation: 8,
    },
    header: {
        marginBottom: 32,
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: '800',
        color: '#1F2937',
        marginBottom: 8,
        letterSpacing: -1,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#6B7280',
        letterSpacing: 0.2,
    },
    form: {
        gap: 16,
    },
    inputContainer: {
        marginBottom: 8,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#374151',
        marginBottom: 8,
        letterSpacing: 0.3,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F9FAFB',
        borderRadius: 16,
        borderWidth: 2,
        borderColor: '#E5E7EB',
        paddingHorizontal: 16,
        height: 56,
    },
    inputIcon: {
        fontSize: 20,
        marginRight: 12,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#1F2937',
        fontWeight: '500',
    },
    eyeButton: {
        padding: 4,
    },
    eyeIcon: {
        fontSize: 20,
    },
    forgotButton: {
        alignSelf: 'flex-end',
        marginTop: 4,
        marginBottom: 8,
    },
    forgotText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#6366F1',
    },
    loginButton: {
        backgroundColor: '#6366F1',
        paddingVertical: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginTop: 8,
        // iOS shadow
        shadowColor: '#6366F1',
        shadowOpacity: 0.3,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 4 },
        // Android elevation
        elevation: 4,
    },
    loginButtonPressed: {
        opacity: 0.8,
        transform: [{ scale: 0.98 }],
    },
    loginButtonText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#FFFFFF',
        letterSpacing: 0.5,
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 24,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#E5E7EB',
    },
    dividerText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#9CA3AF',
        marginHorizontal: 16,
        letterSpacing: 1,
    },
    socialContainer: {
        flexDirection: 'row',
        gap: 12,
    },
    socialButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F9FAFB',
        paddingVertical: 14,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        gap: 8,
    },
    socialIcon: {
        fontSize: 20,
    },
    socialText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#374151',
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
    },
    signupText: {
        fontSize: 14,
        color: '#6B7280',
        fontWeight: '500',
    },
    signupLink: {
        fontSize: 14,
        fontWeight: '700',
        color: '#6366F1',
    },
});