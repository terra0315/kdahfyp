const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcI-2kOC77BSJr5hIGS_XPmpHEaWyvJgU",
  authDomain: "kdah-disaster-app.firebaseapp.com",
  projectId: "kdah-disaster-app",
  storageBucket: "kdah-disaster-app.firebasestorage.app",
  messagingSenderId: "944095137179",
  appId: "1:944095137179:web:46e1489e0b5837da02653e",
  measurementId: "G-540H987BNF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = { db }; 