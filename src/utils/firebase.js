// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV4HcHwqEwSIfTw4XaianLXPsB1I-Jq5s",
  authDomain: "popcorn-ba378.firebaseapp.com",
  projectId: "popcorn-ba378",
  storageBucket: "popcorn-ba378.appspot.com",
  messagingSenderId: "833240040207",
  appId: "1:833240040207:web:574d19c19e700b62e4747a",
  measurementId: "G-Q229PN5BQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();