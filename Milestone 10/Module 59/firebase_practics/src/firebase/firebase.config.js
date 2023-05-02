// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQZTB8JDX5hTtPGVI7gArb8rhL_HBhLKk",
  authDomain: "log-reg-2be7c.firebaseapp.com",
  projectId: "log-reg-2be7c",
  storageBucket: "log-reg-2be7c.appspot.com",
  messagingSenderId: "76030233765",
  appId: "1:76030233765:web:3b9dbd473bf2400cd2114c",
  measurementId: "G-92SYVJ7MZN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
