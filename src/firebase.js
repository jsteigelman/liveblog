// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYPxxiML3TIbLFepek39Rz3yBsKaRRkW0",
  authDomain: "live-blog-5adfa.firebaseapp.com",
  projectId: "live-blog-5adfa",
  storageBucket: "live-blog-5adfa.appspot.com",
  messagingSenderId: "349667531210",
  appId: "1:349667531210:web:52e1afdb2a475a0465d733",
  measurementId: "G-4H6X1P7S6T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);