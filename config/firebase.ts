// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {initializeAuth, getReactNativePersistence} from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_AjklM7Dfcat7MtMUDyPpMLfpZqTVeyc",
  authDomain: "expense-tracker-390b7.firebaseapp.com",
  projectId: "expense-tracker-390b7",
  storageBucket: "expense-tracker-390b7.firebasestorage.app",
  messagingSenderId: "443260221728",
  appId: "1:443260221728:web:bd1904e12109ea8c573f45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})

export const firestore = getFirestore(app)