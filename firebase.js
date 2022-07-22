// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT4D50kMwxIliksohVHzV7M6ssN4MWUcA",
  authDomain: "the-hip-store-96306.firebaseapp.com",
  projectId: "the-hip-store-96306",
  storageBucket: "the-hip-store-96306.appspot.com",
  messagingSenderId: "1020118592891",
  appId: "1:1020118592891:web:1423de13f0890cd08821de",
  measurementId: "G-NHQMYRBX2S"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
const analytics = getAnalytics(app);
const db = getFirestore();
const storage = getStorage();

export {app, db, storage}