import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Sepet from './sepet'; // Doğru dosya yolunu kontrol edin


function FoodDetails({ route, navigation }) {
  const { dish } = route.params;
  const [rating, setRating] = useState(dish.rating);
  const [selectedRating, setSelectedRating] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleRating = (newRating) => {
    setSelectedRating(newRating);
  };

  const isFilled = (index) => {
    return selectedRating >= index + 1;
  };

  const submitRating = () => {
    setRating(selectedRating);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const addToCart = () => {
    // Sepete eklemek için gerekli işlemleri burada yapın
    // Örneğin: Sepete eklenen ürün bilgisini başka bir bileşene veya veri tabanına aktarabilirsiniz
    // Bu örnekte, sadece bir konsol mesajı yazıyoruz
    console.log('Ürün sepete eklendi:', dish.dish_name);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: dish.image_url }} style={styles.image} />
      </View>

      <Text style={styles.dishName}>{dish.dish_name}</Text>

      <Text style={styles.description}>{dish.description}</Text>

      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Price:</Text>
          <Text style={styles.value}>{dish.price}₺</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.label}>Rating:</Text>
          <View style={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map((index) => (
              <TouchableOpacity key={index} activeOpacity={0.7} onPress={() => handleRating(index)} style={styles.starContainer}>
                <FontAwesome name={isFilled(index) ? 'star' : 'star-o'} size={24} color={isFilled(index) ? '#FFD700' : '#808080'} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      <TouchableOpacity activeOpacity={0.7} onPress={submitRating} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Save Rating</Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7} onPress={toggleFavorite} style={styles.favoriteButton}>
        <FontAwesome name={isFavorite ? 'heart' : 'heart-o'} size={24} color={isFavorite ? 'red' : '#808080'} />
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7} onPress={addToCart} style={styles.cartButton}>
        <Text style={styles.cartButtonText}>Add to Cart</Text>
      </TouchableOpacity>

      <View style={styles.allergensContainer}>
        <Text style={styles.allergensTitle}>Allergens:</Text>
        {dish.allergens && dish.allergens.length > 0 ? (
          dish.allergens.map((allergen, index) => (
            <View key={index} style={styles.allergenItem}>
              <FontAwesome name="exclamation-circle" size={20} color="red" style={styles.icon} />
              <Text style={styles.allergenText}>{allergen}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.allergenText}>No allergen information available.</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  dishName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starContainer: {
    marginRight: 5,
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  favoriteButton: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  cartButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  cartButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  allergensContainer: {
    marginTop: 20,
  },
  allergensTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#555',
  },
  allergenItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  icon: {
    marginRight: 5,
  },
  allergenText: {
    fontSize: 16,
    color: '#333',
  },
});

export default FoodDetails;
