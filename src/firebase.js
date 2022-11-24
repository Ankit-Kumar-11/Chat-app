import { getFirestore } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBSe0VYULWhmRUem4-kEWq0aHv4pThHyQ0",
  authDomain: "let-s-chat-c7efa.firebaseapp.com",
  projectId: "let-s-chat-c7efa",
  storageBucket: "let-s-chat-c7efa.appspot.com",
  messagingSenderId: "932615654425",
  appId: "1:932615654425:web:e0eec6e5cf480352156e88"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
