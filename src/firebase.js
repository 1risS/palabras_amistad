// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2o-X4ME7BA3fql779yHoRqIE8UY9Ox-E",
  authDomain: "palabras-amistad.firebaseapp.com",
  databaseURL: "https://palabras-amistad-default-rtdb.firebaseio.com",
  projectId: "palabras-amistad",
  storageBucket: "palabras-amistad.appspot.com",
  messagingSenderId: "343505131888",
  appId: "1:343505131888:web:4a00afa748ae2b4a44d7b5",
  measurementId: "G-42N6H4QN9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getDatabase(app);

export { app, db }