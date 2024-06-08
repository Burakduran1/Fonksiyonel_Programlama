import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Ionicons'u içe aktar

const Home = ({ route }) => { // route'u içe aktar

  

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-circle" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.textContainer}>
        <Image source={require('./../assets/logo.jpg')} style={styles.logo} />
        <Text style={styles.head}>Restorana Hoşgeldiniz</Text>
      </View>

      <View style={styles.buttonContainer}>
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
  headerContainer: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonContainer: {
    marginTop: 20,
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
