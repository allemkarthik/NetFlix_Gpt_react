// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfQtKT0t4hSbKUEA6PuU5FGsHBmq0Ka-g",
  authDomain: "netflixgpt-c891a.firebaseapp.com",
  projectId: "netflixgpt-c891a",
  storageBucket: "netflixgpt-c891a.firebasestorage.app",
  messagingSenderId: "515122085564",
  appId: "1:515122085564:web:47bba070fd4f466faf9ab9",
  measurementId: "G-W1G4K8WVVT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();