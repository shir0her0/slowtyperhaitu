import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

console.log(process.env.REACT_APP_API_KEY);
const firebaseConfig = {
    apiKey: "AIzaSyDRwZlTPhLh2aOLNaTZ9QfxxccRUI466XE",
    authDomain: "keyboardom.firebaseapp.com",
    projectId: "keyboardom",
    storageBucket: "keyboardom.firebasestorage.app",
    messagingSenderId: "261664595691",
    appId: "1:261664595691:web:7a97e1a964da3c79fe28ae",
    measurementId: "G-95404FX6W4"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export {auth, db}