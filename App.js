import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/home';
import About from './pages/About';
import Menu from './pages/menu/menu';
import Fooddetails from './pages/fooddetails';
import Contact from './pages/Contact';
import Sepet from './pages/sepet';
import LoginScreen from './pages/LoginScreen';
import SignUpScreen from './pages/SignUpScreen';
import Promotions from './pages/Promotions';
import ProfileScreen from './pages/ProfileScreen'; // Profil sayfasını içe aktarın

import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import food from './food.json'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#DBDBDB',
          },
          headerTintColor: 'black', 
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Kayıt Ol' }} />
        
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
        <Stack.Screen 
          name="Promotions" 
          options={{ title: 'Promosyonlar' }}
        >
          {props => <Promotions {...props} menuSections={food.menu_sections} />} 
        </Stack.Screen>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profilim' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
