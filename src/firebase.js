import { initializeApp } from 'firebase/app';

// Initialize Firebase
// *** USE YOUR CONFIG OBJECT ***
const config = {
    apiKey: "YOUR-API-KET",
    authDomain: "daily-planner-8f7a7.firebaseapp.com",
    databaseURL: "https://daily-planner-8f7a7-default-rtdb.firebaseio.com/",
    projectId: "daily-planner-8f7a7",
    storageBucket: "daily-planner-8f7a7.appspot.com",
    messagingSenderId: "548100999451"
};

// setting a variable that initializes our application
const firebase = initializeApp(config);
// this exports the CONFIGURED version of firebase
export default firebase;