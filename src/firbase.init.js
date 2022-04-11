// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDcrSMQTkMROi1CflPhYr97yMhK1SI6dqQ",
    authDomain: "my-genius-car-services.firebaseapp.com",
    projectId: "my-genius-car-services",
    storageBucket: "my-genius-car-services.appspot.com",
    messagingSenderId: "604267015126",
    appId: "1:604267015126:web:91ac1bbe77d526f0a6d277"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;