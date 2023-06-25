// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5jFbQZ0xogxQMwMYgGVWi0OQbmiA_Rfc",
  authDomain: "barbergo-1d300.firebaseapp.com",
  projectId: "barbergo-1d300",
  storageBucket: "barbergo-1d300.appspot.com",
  messagingSenderId: "953840732559",
  appId: "1:953840732559:web:54bfe60bd206b02ae423fa",
  measurementId: "G-YDGYQDZH09",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
