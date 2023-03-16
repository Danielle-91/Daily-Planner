// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzAOAQVZCHSbjauyJNaJxw7IMYqS-_5VQ",
    authDomain: "daily-planner-88e12.firebaseapp.com",
    databaseURL: "https://daily-planner-88e12-default-rtdb.firebaseio.com",
    projectId: "daily-planner-88e12",
    storageBucket: "daily-planner-88e12.appspot.com",
    messagingSenderId: "395185995384",
    appId: "1:395185995384:web:fcf32a3dc6779ecd60b78d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { firebaseConfig, auth };