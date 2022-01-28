import { initializeApp } from "firebase/app";
import { getDatabase, ref } from 'firebase/database';

let firebaseConfig = {};


if ( process.env.NODE_ENV === "development") {
    const devEnv = await import('./environment.dev');
    firebaseConfig = { ...devEnv };
} 


if ( process.env.NODE_ENV === "production") {
    const response = await fetch("https://wonderful-hamilton-9b9837.netlify.app/.netlify/functions/api");
    const devEnv = await response.json();
    firebaseConfig = { ...devEnv };
}


// Initialize Firebase
const app = initializeApp(firebaseConfig, "Astonauts everywhere");

// get reference pointing to the child (astronauts/) of the root
// https://firebase.google.com/docs/reference/js/database.md#ref
export const db = ref(getDatabase(app), 'astronauts/');
