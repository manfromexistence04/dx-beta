// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// const firebaseConfig = {
//   apiKey: "AIzaSyBoFLC28jlqDy0TZFovbxXrdQ0-MXjoUhA",
//   authDomain: "curd-testing-eb202.firebaseapp.com",
//   projectId: "curd-testing-eb202",
//   storageBucket: "curd-testing-eb202.appspot.com",
//   messagingSenderId: "691450371764",
//   appId: "1:691450371764:web:bbad529ad08acb5541c1e1",
// };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
// const analytics = getAnalytics(app);

// const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
