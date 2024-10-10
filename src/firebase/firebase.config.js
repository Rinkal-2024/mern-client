// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtzO3ZvGvZ-KeMIEZ8nN0z-YPSZ539wq0",
  authDomain: "mern-book-inventory-45a2a.firebaseapp.com",
  projectId: "mern-book-inventory-45a2a",
  storageBucket: "mern-book-inventory-45a2a.appspot.com",
  messagingSenderId: "972459021610",
  appId: "1:972459021610:web:e7660b146292a7bc8cfa53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the initialized app instance
export default app;

