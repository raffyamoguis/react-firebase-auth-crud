// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAsR30P4tBWE87z5d9a24i92lsCfy-GuJc',
  authDomain: 'tutorial-c69b0.firebaseapp.com',
  projectId: 'tutorial-c69b0',
  storageBucket: 'tutorial-c69b0.appspot.com',
  messagingSenderId: '806503812765',
  appId: '1:806503812765:web:4ce4b28d429c76d82bce74',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
