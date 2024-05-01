import { initializeApp } from "firebase/app";
import { collection, getDocs,addDoc,updateDoc,deleteDoc,getFirestore,doc  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaTltvsBtb0PUUNqjNPKpUTzHyLuhefiY",
  authDomain: "ustudy-70041.firebaseapp.com",
  projectId: "ustudy-70041",
  storageBucket: "ustudy-70041.appspot.com",
  messagingSenderId: "209553469910",
  appId: "1:209553469910:web:5787a019905baf47c73477",
  measurementId: "G-NNPVVRK9VK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Database
const db = getFirestore(app);
const docRef = doc(db, "users", "FORAxYegA51aV7ZWiB80");
// const docRef = doc(db, "users", "John Doe");

// Create
// const docRef = await addDoc(collection(db, "users"), {
//   name: "John Doe",
//   age: 30,
// });
// console.log(docRef);

// Read
// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data().name}`);
// });

// Update
// await updateDoc(docRef, {
//   name: "Ada Lovelace",
// });

// Delete
await deleteDoc(docRef);
