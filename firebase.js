import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA3nji1N0Frmou_SlkN_okjvdN35MlkcqA",
  authDomain: "password-matrix-s.firebaseapp.com",
  projectId: "password-matrix-s",
  storageBucket: "password-matrix-s.appspot.com",
  messagingSenderId: "288859511104",
  appId: "1:288859511104:web:636111349346e9abcf82a5",
  measurementId: "G-Q6XDNJYWY0",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const firestore = getFirestore(app);

export { app, database, firestore };
