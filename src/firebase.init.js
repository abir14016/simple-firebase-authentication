import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCiMC3zckZdml96QlIkCediEhjCeRQ9dRI",
    authDomain: "simple-firebase-authenti-14937.firebaseapp.com",
    projectId: "simple-firebase-authenti-14937",
    storageBucket: "simple-firebase-authenti-14937.appspot.com",
    messagingSenderId: "869687057320",
    appId: "1:869687057320:web:5acf3bd2efd6d12a489b9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;