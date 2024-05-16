import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const Contact = () => {
  const sendEmail = () => {
    Linking.openURL('mailto:215541049@firat.edu.tr');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>İletişim Bilgileri</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>İsim:</Text>
        <Text style={styles.text}>Burak Can Duran</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>E-posta:</Text>
        <TouchableOpacity onPress={sendEmail}>
          <Text style={[styles.text, styles.email]}>215541049@firat.edu.tr</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Telefon:</Text>
        <Text style={styles.text}>+90 123 456 7890</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Adres:</Text>
        <Text style={styles.text}>Fırat Üniversitesi, Elazığ, Türkiye</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DBDBDB',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  text: {
    fontSize: 16,
  },
  email: {
    textDecorationLine: 'underline',
    color: 'blue',
  },
});

export default Contact;
