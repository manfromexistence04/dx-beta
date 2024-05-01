/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// import { initializeApp } from "firebase/app";
// import { collection, getDocs, addDoc, updateDoc, deleteDoc, getFirestore, doc } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDaTltvsBtb0PUUNqjNPKpUTzHyLuhefiY",
//   authDomain: "ustudy-70041.firebaseapp.com",
//   projectId: "ustudy-70041",
//   storageBucket: "ustudy-70041.appspot.com",
//   messagingSenderId: "209553469910",
//   appId: "1:209553469910:web:5787a019905baf47c73477",
//   measurementId: "G-NNPVVRK9VK"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Database
// const db = getFirestore(app);
// Read
// const Read = await getDocs(collection(db, "users"));
// Read.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data().name}`);
// });

// Update
// await updateDoc(docRef, {
//   name: "Ada Lovelace",
// });

// Delete
// await deleteDoc(docRef);




// const citiesRef = db.collection('cities');

// const citiesData = [
//   {
//     name: 'San Francisco',
//     state: 'CA',
//     country: 'USA',
//     capital: false,
//     population: 860000,
//     regions: ['west_coast', 'norcal']
//   },
//   {
//     name: 'Los Angeles',
//     state: 'CA',
//     country: 'USA',
//     capital: false,
//     population: 3900000,
//     regions: ['west_coast', 'socal']
//   },
//   {
//     name: 'Washington D.C.',
//     state: null,
//     country: 'USA',
//     capital: true,
//     population: 680000,
//     regions: ['east_coast']
//   },
//   {
//     name: 'Tokyo',
//     state: null,
//     country: 'Japan',
//     capital: true,
//     population: 9000000,
//     regions: ['kanto', 'honshu']
//   },
//   {
//     name: 'Beijing',
//     state: null,
//     country: 'China',
//     capital: true,
//     population: 21500000,
//     regions: ['jingjinji', 'hebei']
//   }
// ];

// const batch = db.batch();

// citiesData.forEach(city => {
//   const res = citiesRef.add(city);
//   console.log('Added document with ID: ', res.id);
//   batch.set(citiesRef.doc(res.id).collection('landmarks').doc(), {
//     name: 'Golden Gate Bridge',
//     type: 'bridge'
//   });
//   batch.set(citiesRef.doc(res.id).collection('landmarks').doc(), {
//     name: 'Legion of Honor',
//     type: 'museum'
//   });
// });

// await batch.commit();  


// import { initializeApp } from "firebase/app";
// import { collection, getDocs, addDoc, updateDoc, deleteDoc, getFirestore, doc } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDaTltvsBtb0PUUNqjNPKpUTzHyLuhefiY",
//   authDomain: "ustudy-70041.firebaseapp.com",
//   projectId: "ustudy-70041",
//   storageBucket: "ustudy-70041.appspot.com",
//   messagingSenderId: "209553469910",
//   appId: "1:209553469910:web:5787a019905baf47c73477",
//   measurementId: "G-NNPVVRK9VK"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Get a reference to the database service
// const db = getFirestore(app);

// // Create a collection reference
// const citiesRef = collection(db, "cities");

// // Add a document to the collection with an auto-generated id
// const res = await addDoc(citiesRef, {
//   name: "Tokyo",
//   country: "Japan"
// });

// console.log("Added document with ID: ", res.id);









import { initializeApp } from "firebase/app";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, getFirestore, doc } from "firebase/firestore";

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

// Get a reference to the database service
const db = getFirestore(app);

// Create a collection reference
const citiesRef = collection(db, "cities");

// Add a document to the collection with an auto-generated id
const cities = [
  {
    name: "Tokyo",
    country: "Japan"
  },
  {
    name: "San Francisco",
    country: "USA"
  },
  {
    name: "London",
    country: "UK"
  }
];

cities.forEach(async (city) => {
  const res = await addDoc(citiesRef, city);
  console.log("Added document with ID: ", res.id);
});

