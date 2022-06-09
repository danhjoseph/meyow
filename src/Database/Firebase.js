// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB8rGUGZsyNd_5L_kUlnNNgbRMS-B3xFew",
  authDomain: "meyow-7f1bb.firebaseapp.com",
  projectId: "meyow-7f1bb",
  storageBucket: "meyow-7f1bb.appspot.com",
  messagingSenderId: "471028695555",
  appId: "1:471028695555:web:c278c2e892d49dc6fa0436",
  measurementId: "G-MKDH3HW8CZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
