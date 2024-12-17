// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import Auth service
import { getFirestore } from "firebase/firestore"; // Import Firestore service
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfMS_r18h52FCh9cEulbNNwIX-slHa5VI",
  authDomain: "subletnextdoor.firebaseapp.com",
  projectId: "subletnextdoor",
  storageBucket: "subletnextdoor.firebasestorage.app",
  messagingSenderId: "129186686175",
  appId: "1:129186686175:web:d06be21b4efbb54dff756a",
  measurementId: "G-1YF0YJ6K6C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app); // Initialize Auth
export const db = getFirestore(app); // Initialize Firestore