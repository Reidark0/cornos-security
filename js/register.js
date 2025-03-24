// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
// https://firebase.google.com/docs/web/learn-more#available-libraries
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

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

const auth = getAuth();

// submit
const submit = document.getElementById('submit');
submit.addEventListener('click', function (event) {
    event.preventDefault();

    // inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert('Criando conta...')
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        })
})
