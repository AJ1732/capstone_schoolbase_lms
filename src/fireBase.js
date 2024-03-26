// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBygTw4AA_XpNz2K9rUU2imkJs1azASwmA",
  authDomain: "react-auth-tutorial-92866.firebaseapp.com",
  projectId: "react-auth-tutorial-92866",
  storageBucket: "react-auth-tutorial-92866.appspot.com",
  messagingSenderId: "381130737341",
  appId: "1:381130737341:web:cc9fd829dbba1d8dd5d9d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);
