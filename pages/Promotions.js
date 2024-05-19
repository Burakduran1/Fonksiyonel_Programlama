import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const Promotions = ({ menuSections }) => {
  // Örnek olarak ilk menü bölümünden bazı ürünleri seçiyoruz
  const promotions = menuSections[0]?.dishes.slice(0, 3) || [];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Promosyonlar</Text>
      <FlatList
        data={promotions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.promotionItem}>
            <Text style={styles.promotionText}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>{item.price} TL</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  promotionItem: {
    backgroundColor: '#FFF',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    width: '90%',
    alignItems: 'center',
  },
  promotionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Promotions;
