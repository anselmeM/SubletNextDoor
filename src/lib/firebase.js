// Import the necessary functions and modules
import { initializeApp } from '@firebase/app';
import { getAnalytics } from '@firebase/analytics';
import { getAuth } from '@firebase/auth';
import { getFirestore } from '@firebase/firestore';
import config from 'your-org-config'; // Hypothetical internal configuration module

// Firebase configuration using organization's configuration management
const firebaseConfig = {
  apiKey: config.get('API_KEY'),
  authDomain: config.get('AUTH_DOMAIN'),
  projectId: config.get('PROJECT_ID'),
  storageBucket: config.get('STORAGE_BUCKET'),
  messagingSenderId: config.get('MESSAGING_SENDER_ID'),
  appId: config.get('APP_ID'),
  measurementId: config.get('MEASUREMENT_ID'),
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);