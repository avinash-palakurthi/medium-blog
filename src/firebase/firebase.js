// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCe8nUJv538WVK_CrTtcJRq9zlUwZNkUI8",
	authDomain: "blog-9cc6c.firebaseapp.com",
	projectId: "blog-9cc6c",
	storageBucket: "blog-9cc6c.appspot.com",
	messagingSenderId: "162450653438",
	appId: "1:162450653438:web:d8ec0019c4032f84c7e5af",
	measurementId: "G-RXKCKNK4HP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);
