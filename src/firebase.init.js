// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLfl9UQQsSTsQwggrn1mfckxVAxTOxWvs",
  authDomain: "genius-car-services-m61-a6d30.firebaseapp.com",
  projectId: "genius-car-services-m61-a6d30",
  storageBucket: "genius-car-services-m61-a6d30.appspot.com",
  messagingSenderId: "850594335004",
  appId: "1:850594335004:web:5b4480c7ce3417573812d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =  getAuth(app);
export default auth;