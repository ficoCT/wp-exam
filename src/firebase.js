// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAg194hqjUcdHzLHXDxQBtsmy0NT6Ei2ZM",
    authDomain: "wp-exam.firebaseapp.com",
    projectId: "wp-exam",
    storageBucket: "wp-exam.appspot.com",
    messagingSenderId: "1076647116267",
    appId: "1:1076647116267:web:bd49e3f77c85e4fb0b2dae",
    measurementId: "G-JY41YWVSDZ"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = firebase.auth();

auth.onAuthStateChanged(user => {
    // Check for user status
});