// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-Spt2dwRUlxbdJAeKGoSjoBGB_PE4Lsg",
  authDomain: "netflixgpt-900da.firebaseapp.com",
  projectId: "netflixgpt-900da",
  storageBucket: "netflixgpt-900da.appspot.com",
  messagingSenderId: "113206331696",
  appId: "1:113206331696:web:bf1f43e3a1495590b520f5",
  measurementId: "G-BCTYJQZ3Y4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()