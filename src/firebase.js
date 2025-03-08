// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrAU2rxeROzWp8BOMlPpi-lUKEE7R0KSU",
  authDomain: "invoice-37035.firebaseapp.com",
  projectId: "invoice-37035",
  storageBucket: "invoice-37035.firebasestorage.app",
  messagingSenderId: "851373859796",
  appId: "1:851373859796:web:96dca136037bb942486c41",
  measurementId: "G-7T2RDCN7CH",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
