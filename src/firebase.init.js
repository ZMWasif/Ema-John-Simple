// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8WbjQOKJTzrbG52vrqxBhMBciI5UlI6g",
  authDomain: "ema-john-simple-f4ba8.firebaseapp.com",
  projectId: "ema-john-simple-f4ba8",
  storageBucket: "ema-john-simple-f4ba8.appspot.com",
  messagingSenderId: "1041212928358",
  appId: "1:1041212928358:web:3d4abba30c64c8e8b0d8a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
