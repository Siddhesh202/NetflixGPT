// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsjbtNo0SmFbgnAPGucKcRCE62jY3wf0k",
  authDomain: "netflix-4132a.firebaseapp.com",
  projectId: "netflix-4132a",
  storageBucket: "netflix-4132a.appspot.com",
  messagingSenderId: "331426364408",
  appId: "1:331426364408:web:48f5ae83b477054c80b40d",
  measurementId: "G-Y2G93B42W0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
