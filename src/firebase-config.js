// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP6nnCcuka8B-qoRgt1zgsD9AeuQwQGwU",
  authDomain: "designo-b50ea.firebaseapp.com",
  projectId: "designo-b50ea",
  storageBucket: "designo-b50ea.firebasestorage.app",
  messagingSenderId: "299568029207",
  appId: "1:299568029207:web:eaea5e6af9a7661e394652",
  measurementId: "G-1RE15CZZ8J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);