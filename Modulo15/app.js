import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, getDocs  } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAngp4Haz6lVMT8W7UbBZnJvNc3ZBoxfJQ",
  authDomain: "testing-firebase-c109d.firebaseapp.com",
  projectId: "testing-firebase-c109d",
  storageBucket: "testing-firebase-c109d.appspot.com",
  messagingSenderId: "898212491539",
  appId: "1:898212491539:web:6736b75e67ff1a516a2ae6",
  measurementId: "G-PC94ED01HV",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


getDocs(collection(db, "games")).then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
  })
}).catch(console.log());
