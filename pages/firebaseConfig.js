// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDa48NfOlYV86Lo-6Z0xiPByP4riWH2JQs",
  authDomain: "fir-6d869.firebaseapp.com",
  projectId: "fir-6d869",
  storageBucket: "fir-6d869.appspot.com",
  messagingSenderId: "452746587355",
  appId: "1:452746587355:web:69128042efdd16973070fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { app, auth };
