// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const app = initializeApp(firebaseConfig);

// Database
const db = getFirestore(app);
// const docRef = doc(db, "users", "FORAxYegA51aV7ZWiB80");

// Create
const Create = await addDoc(collection(db, "users"), {
  name: "The Adult Man",
  age: 30,
});
// console.log(docRef);

// Read
const Read = await getDocs(collection(db, "users"));
Read.forEach((/** @type {{ id: any; data: () => { (): any; new (): any; name: any; }; }} */ doc) => {
  console.log(`${doc.id} => ${doc.data().name}`);
});

// Update
// await updateDoc(docRef, {
//   name: "Ada Lovelace",
// });

// Delete
// await deleteDoc(docRef);
