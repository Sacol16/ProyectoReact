// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALMXanTAKf5XF34D1kdmR8Uv9TPcuQ-lk",
  authDomain: "cozyluxe-71e84.firebaseapp.com",
  projectId: "cozyluxe-71e84",
  storageBucket: "cozyluxe-71e84.firebasestorage.app",
  messagingSenderId: "362054814161",
  appId: "1:362054814161:web:a424a003c508007529b8f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;