import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQWqXKxihZiKkHV92IOHKEjRQeWWSJD0s",
  authDomain: "portfolio-4b088.firebaseapp.com",
  projectId: "portfolio-4b088",
  storageBucket: "portfolio-4b088.appspot.com",
  messagingSenderId: "609063166435",
  appId: "1:609063166435:web:5229d5977ef22e2d66c0d6",
  measurementId: "G-BX2JN75RJC",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export default app;

auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
