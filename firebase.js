// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiIUDU9wewdG5HOYFvspdqcF6wqm_LsJY",
  authDomain: "study-buddy-1bc5b.firebaseapp.com",
  projectId: "study-buddy-1bc5b",
  storageBucket: "study-buddy-1bc5b.appspot.com",
  messagingSenderId: "1037923962636",
  appId: "1:1037923962636:web:0fa2de4b8ce8abe36c0329",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
