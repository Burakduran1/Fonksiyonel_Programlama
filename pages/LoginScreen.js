import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './firebaseConfig'; // Firebase konfigürasyonunu içe aktar

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 const handleLogin = async () => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log('User signed in successfully!');
    // Başarılı giriş işlemi sonrasında Home ekranına yönlendir ve e-posta bilgisini geç
    const userEmail = email; // E-posta bilgisini bir değişkene ata
    navigation.navigate('Home', { email: userEmail }); // E-posta bilgisini Home ekranına geçir
  } catch (error) {
    console.error('Error signing in:', error);
    // Hatalı giriş durumunda kullanıcıya uyarı göster
    alert('E-posta veya şifre hatalı. Lütfen tekrar deneyin.');
  }
};

  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      console.log('Password reset email sent successfully!');
      // Kullanıcıya şifre sıfırlama e-postası gönderildiğine dair bir uyarı göster
      alert('Şifre sıfırlama e-postası gönderildi. Lütfen e-postanızı kontrol edin.');
    } catch (error) {
      console.error('Error sending password reset email:', error);
      // E-posta gönderme hatası durumunda kullanıcıya uyarı göster
      alert('Şifre sıfırlama e-postası gönderilemedi. Lütfen tekrar deneyin.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restoran Girişi</Text>
      <TextInput
        style={styles.input}
        placeholder="E-posta"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPasswordButton} onPress={handleForgotPassword}>
        <Text style={styles.buttonText}>Şifremi Unuttum</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonText}>Kayıt Ol</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  loginButton: {
    width: '80%',
    height: 40,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  forgotPasswordButton: {
    width: '80%',
    height: 40,
    backgroundColor: '#dc3545',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  registerButton: {
    width: '80%',
    height: 40,
    backgroundColor: '#28a745',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
