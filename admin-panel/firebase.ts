import { initializeApp } from "firebase/app";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, getFirestore, doc, getDoc } from "firebase/firestore";

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
const db:any = getFirestore(app);
// const docRef = doc(db, "universities", "6PScoZGddeLUjivK5Bny");

// Create
// const Create = await addDoc(collection(db, "universities"), {
//     address: 'Bangladesh, Kaligonj',
//     educationCost: '1 335 000 ₸',
//     email: 'rektorat@amu.kz',
//     facebook: 'https://www.facebook.com/MeduniverAstana',
//     hostel: 'есть',
//     image: 'https://firebasestorage.googleapis.com/v0/b/ustudy-96678.appspot.com/o/IMG_20240410_001743.jpg?alt=media&token=ef6b3928-40bd-460b-bbb8-f0445ff37319',
//     instagram: 'https://www.instagram.com/amu_mua_official',
//     military: 'есть',
//     phoneNumber: '(+77172539424)',
//     region: 'г. Астана',
//     status: 'акционированный',
//     universityCode: '1',
//     universityDescription: 'Медицинский университет Астана является одним из самых крупных и динамично развивающихся медицинских ВУЗов нашей страны, имеет высокую репутацию в сфере высшего медицинского образования, свои традиции, как в области предоставления образовательных услуг, так и в развитии медицинской науки и клинической деятельности.',
//     universityName: 'Медицинский университет Астана',
//     website: 'https://amu.edu.kz/',
// });
// console.log("Document written with ID: ", Create.id);

// console.log(docRef);

// Read
const Read = await getDocs(collection(db, "universities"));
Read.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
});

// Read ONE
// const universitiesRef = await getDoc(collection(db, "universities"));
// const snapshot = await universitiesRef.get();
// snapshot.forEach(doc => {
//   console.log(doc.id, '=>', doc.data());
// });  
// console.log()
// Update
// await updateDoc(docRef, {
//   name: "Ada Lovelace",
// });

// Delete
// await deleteDoc(docRef);
// await getDoc(docRef);

// console.log(await getDoc(docRef).id);
// const docRef = db.collection('universities').doc('SF');
// const docKer = await docRef.get();
// if (!docKer.exists) {
//   console.log('No such document!');
// } else {
//   console.log('Document data:', docKer.data());
// }  


// const docRef = doc(db, "universities", "6PScoZGddeLUjivK5Bny");
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
// } else {
//     console.log("No such document!");
// }



export default {db};