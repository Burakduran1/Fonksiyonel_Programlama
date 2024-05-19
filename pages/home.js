import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Image source={require('./../assets/logo.jpg')} style={styles.logo} />
        <Text style={styles.head}>Restorana Hoşgeldiniz</Text>
      </View>

      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Menu')}>
        <Text style={styles.text}>Menü</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('About')}>
        <Text style={styles.text}>Hakkında</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Contact')}>
        <Text style={styles.text}>İletişim</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Promotions')}>
        <Text style={styles.text}>Promosyonlar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  logo: {
    width: 420,
    height: 200,
  },
  head: {
    color: 'black',
    fontSize: 25,
    marginTop: 10,
    marginBottom: 40,
    textAlign: 'center',
  },
  box: {
    borderColor: 'black',
    backgroundColor: "#F5F5F5",
    borderWidth: 1,
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginBottom: 20,
    marginHorizontal: 30,
  },
  text: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
});

export default Home;
