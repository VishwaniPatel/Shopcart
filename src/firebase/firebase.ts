// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCpVCVyG8Yg6bT8Eby8FCwOheHb82vNyWo",
  authDomain: "shopcart-43e68.firebaseapp.com",
  projectId: "shopcart-43e68",
  storageBucket: "shopcart-43e68.appspot.com",
  messagingSenderId: "1095148992097",
  appId: "1:1095148992097:web:cc1bc9e8885278c5521c20",
  measurementId: "G-GDRD21CXJP",
  databaseURL: "https://shopcart-43e68-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);
export {
  app,
  auth,
  database,
  storage,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
};
