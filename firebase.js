import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDYEfp9-RMLfU-3Uw9gHVntWO7b1AfVfT0",
  authDomain: "my-first-project-f2a50.firebaseapp.com",
  databaseURL: "https://my-first-project-f2a50-default-rtdb.firebaseio.com",
  projectId: "my-first-project-f2a50",
  storageBucket: "my-first-project-f2a50.appspot.com",
  messagingSenderId: "480556166105",
  appId: "1:480556166105:web:203f215bc80f48967987c8",
  measurementId: "G-Y7JMXC8W27"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
  auth,
  db
}