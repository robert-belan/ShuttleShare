import {
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID,
    DATABASE_URL
} from './environment';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
    apiKey: `${API_KEY}`,
    authDomain: `${AUTH_DOMAIN}`,
    projectId: `${PROJECT_ID}`,
    storageBucket: `${STORAGE_BUCKET}`,
    messagingSenderId: `${MESSAGING_SENDER_ID}`,
    appId: `${APP_ID}`,
    databaseURL: `${DATABASE_URL}`
};


// Initialize Firebase
const app = initializeApp(firebaseConfig, "Astonauts everywhere");

// get reference pointing to the child (astronauts/) of the root
// https://firebase.google.com/docs/reference/js/database.md#ref
export const db = ref(getDatabase(app), 'astronauts/');
