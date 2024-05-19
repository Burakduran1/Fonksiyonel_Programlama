import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/home';
import About from './pages/About';
import Menu from './pages/menu/menu';
import Fooddetails from './pages/fooddetails';
import Contact from './pages/Contact';
import Sepet from './pages/sepet';
import Promotions from './pages/Promotions';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // İkon kütüphanesi
import food from './food.json'; // Menü verilerini içe aktarma

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#DBDBDB',
          },
          headerTintColor: 'black', // Başlık metni rengi
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            title: 'Anasayfa',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Sepet')}>
                <Ionicons name="cart-outline" size={24} color="black" style={{ marginRight: 20 }} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="About" component={About} options={{ title: 'Hakkında' }} />
        <Stack.Screen name="Menu" component={Menu} options={({ navigation }) => ({
            title: 'Menu',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Sepet')}>
                <Ionicons name="cart-outline" size={24} color="black" style={{ marginRight: 20 }} />
              </TouchableOpacity>
            ),
          })} />
        <Stack.Screen name="Fooddetails" component={Fooddetails} options={{ title: 'Yemek Detayları' }} />
        <Stack.Screen name="Contact" component={Contact} options={{ title: 'İletişim' }} />
        <Stack.Screen name="Sepet" component={Sepet} options={{ title: 'Sepet' }} />
        <Stack.Screen name="Promotions">
          {props => <Promotions {...props} menuSections={food.menu_sections} />} 
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
