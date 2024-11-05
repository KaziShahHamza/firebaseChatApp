// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhb5QD3ztO649RvPTp6DJEAkicR71Prew",
  authDomain: "chatapp-1db2f.firebaseapp.com",
  projectId: "chatapp-1db2f",
  storageBucket: "chatapp-1db2f.firebasestorage.app",
  messagingSenderId: "750228326333",
  appId: "1:750228326333:web:a14b85043740f2da5db4d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
