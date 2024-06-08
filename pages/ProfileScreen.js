import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ProfileScreen = ({ route, navigation }) => {
  // route.params nesnesini kontrol edin
  const { useremail } = route.params || { email: 'Bilinmeyen' }; // E-posta bilgisini alın veya varsayılan değer kullanın

  // Örnek kullanıcı bilgileri
  const user = {
    name: 'Burak Can ',
    email: 'Burakduran12491@gmail.com' // Alınan e-posta bilgisini kullanın
  };

  const handleLogout = () => {
    // Çıkış yapma işlemi (örneğin, kullanıcı oturumunu sonlandırma işlemleri burada yapılabilir)
    // LoginScreen sayfasına yönlendirme
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ad:</Text>
      <Text style={styles.value}>{user.name}</Text>
      <Text style={styles.label}>E-posta:</Text>
      <Text style={styles.value}>{user.email}</Text>
      <Button title="Çıkış Yap" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default ProfileScreen;
