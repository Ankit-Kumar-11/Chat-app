import { getFirestore } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBN5i5A0frXnZTCGhBMKuvvJMlBw7wVNcg",
  authDomain: "chat-box-cfb67.firebaseapp.com",
  projectId: "chat-box-cfb67",
  storageBucket: "chat-box-cfb67.appspot.com",
  messagingSenderId: "116004736175",
  appId: "1:116004736175:web:6d098a151fa88fe26c185a",
  measurementId: "G-WNFRCYX68Q"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
