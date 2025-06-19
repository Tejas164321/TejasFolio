
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc9FWVHyXg_4tgUQxuPDWNp461YTuYJTo",
  authDomain: "tejas-portfolio-3upzz.firebaseapp.com",
  projectId: "tejas-portfolio-3upzz",
  storageBucket: "tejas-portfolio-3upzz.firebasestorage.app",
  messagingSenderId: "695109732801",
  appId: "1:695109732801:web:147827609b6dad56dd8740"
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp(); // if already initialized, use that one
}

export { app, firebaseConfig };
