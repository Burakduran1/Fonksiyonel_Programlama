import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Sepet = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name="shopping-cart" size={24} color="black" />
      {/* Sepet içindeki ürün sayısını burada gösterebilirsiniz */}
      {/* Örnek: <Text style={styles.count}>3</Text> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: 'red',
    color: 'white',
    borderRadius: 10,
    padding: 5,
    fontSize: 12,
  },
});

export default Sepet;
