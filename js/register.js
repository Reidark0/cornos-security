// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaCTF0OZGMIh8fUlz-PbFqdN7R9tpeUuk",
  authDomain: "cornos-security.firebaseapp.com",
  projectId: "cornos-security",
  storageBucket: "cornos-security.firebasestorage.app",
  messagingSenderId: "834244118547",
  appId: "1:834244118547:web:3148fcb9993b134c7d97e6",
  measurementId: "G-ZRC7VMZ35N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);