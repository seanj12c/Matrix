import { app, firestore } from "./firebase.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

function submitForm() {
  const username = document.getElementById("username").value;
  const department = document.getElementById("department").value;
  const originalPassword = document.getElementById("originalPassword").value;
  const encryptedPassword = btoa(originalPassword);

  const passwordsCollection = collection(firestore, "passwords");
  addDoc(passwordsCollection, {
    username,
    department,
    originalPassword,
    encryptedPassword,
  })
    .then(() => {
      alert("Password information stored in Firestore!");
      document.getElementById("passwordForm").reset();
    })
    .catch((error) => {
      console.error("Error storing data in Firestore:", error);
    });
}

const passwordForm = document.getElementById("passwordForm");

passwordForm.addEventListener("submit", function (event) {
  event.preventDefault();
  submitForm();
});

export { submitForm };
