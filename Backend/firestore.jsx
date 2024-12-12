// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyA5wKIYWyEZHxSQighkfiAVIwL3dnIhvW8",
  authDomain: "bookstore-d6da6.firebaseapp.com",
  projectId: "bookstore-d6da6",
  storageBucket: "bookstore-d6da6.firebasestorage.app",
  messagingSenderId: "496035263411",
  appId: "1:496035263411:web:d652bf517a55bb819851c6",
  measurementId: "G-2PW9TCV1KN"
};


// Initialize Firebase and export
const app = initializeApp(firebaseConfig);

// Initialize analytics (optional, only if needed)
export const analytics = getAnalytics(app);

export default app; 