// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCNdkAb-J3wHYgM9PgaU0eiaDdHg1lb3Mw",
    authDomain: "netflixgpt-a80f9.firebaseapp.com",
    projectId: "netflixgpt-a80f9",
    storageBucket: "netflixgpt-a80f9.firebasestorage.app",
    messagingSenderId: "721988499461",
    appId: "1:721988499461:web:f5f5062f3468ece7ea846c",
    measurementId: "G-WVP6CP7LWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();