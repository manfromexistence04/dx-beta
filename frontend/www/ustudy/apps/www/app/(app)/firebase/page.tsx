"use client";

import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuth } from "@clerk/nextjs";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  onSnapshot,
  query,
  startAfter,
  updateDoc,
} from "firebase/firestore"
import { initializeApp } from "firebase/app"
// import { toast } from "sonner"
// import { ToastAction } from "@/components/ui/toast"
// import { useToast } from "@/components/ui/use-toast"
import { useToast } from "@/registry/default/ui/use-toast"

const firebaseConfig = {
  apiKey: "AIzaSyAj8jpnqU9Xo1YXVFJh-wCdulweO5z--H8",
  authDomain: "ustudy-96678.firebaseapp.com",
  projectId: "ustudy-96678",
  storageBucket: "ustudy-96678.appspot.com",
  messagingSenderId: "581632635532",
  appId: "1:581632635532:web:51ccda7d7adce6689a81a9",
}
const app = initializeApp(firebaseConfig)
const db: any = getFirestore(app)

const auth = getAuth(app);

export const MyAuthComponent = () => {
  const { toast } = useToast()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const extractText = (input: any): string | null => {
  //   if (typeof input !== 'string') {
  //     return null;
  //   }
  //   const match = input.match(/\(([^)]+)\)/);
  //   return match ? match[1] : null;
  // }
  // const EnhancedErrors = (input: any): string | null => {
  //   switch (input) {
  //     case "auth/email-already-in-use":
  //       return "There is already a user using this email address.";
  //     case "auth/invalid-email":
  //       return "The email address is invalid.";
  //     case "auth/operation-not-allowed":
  //       return "This operation is not allowed. You might have disabled email/password login in your Firebase project.";
  //     case "auth/weak-password":
  //       return "The password is too weak. Please choose a stronger password.";
  //     case "auth/user-disabled":
  //       return "This user account has been disabled. Please contact support for assistance.";
  //     case "auth/user-not-found":
  //       return "There is no user record corresponding to this email address. The user may need to register first.";
  //     case "auth/wrong-password":
  //       return "The password is incorrect. Please try again.";
  //     case "auth/too-many-requests":
  //       return "Too many requests have been made to the server. Please try again later.";
  //     case "auth/network-request-failed":
  //       return "A network error occurred. Please check your internet connection and try again.";
  //     default:
  //       return "There was an error signing up. Please try again later.";
  //   }
  // };
  const EnhancedErrors = (input: any): string | null => {
    switch (input) {
      case "auth/email-already-in-use": return "Email in use.";
      case "auth/invalid-email": return "Invalid email.";
      case "auth/operation-not-allowed": return "Operation not allowed.";
      case "auth/weak-password": return "Weak password.";
      case "auth/user-disabled": return "User disabled.";
      case "auth/user-not-found": return "User not found.";
      case "auth/wrong-password": return "Wrong password.";
      case "auth/too-many-requests": return "Too many requests.";
      case "auth/network-request-failed": return "Network error.";
      default: return "Signup error.";
    }
  };
  
  // const SuggestSolutions = (input: any): string | null => {
  //   switch (input) {
  //     case "auth/email-already-in-use":
  //       return "This email address is already in use. Please try logging in or using a different email address.";
  //     case "auth/invalid-email":
  //       return "The email address you entered is invalid. Please check the format and try again.";
  //     case "auth/operation-not-allowed":
  //       return "This operation is not allowed. Please contact support for assistance.";
  //     case "auth/weak-password":
  //       return "The password you entered is too weak. Please choose a stronger password with at least 8 characters, including a mix of uppercase and lowercase letters, numbers, and symbols.";
  //     case "auth/user-disabled":
  //       return "This user account has been disabled. Please contact support for assistance.";
  //     case "auth/user-not-found":
  //       return "There is no user record corresponding to this email address. Please check the email address and try again, or create a new account.";
  //     case "auth/wrong-password":
  //       return "The password you entered is incorrect. Please try again.";
  //     case "auth/too-many-requests":
  //       return "Too many requests have been made to the server. Please wait a few minutes and try again.";
  //     case "auth/network-request-failed":
  //       return "A network error occurred. Please check your internet connection and try again.";
  //     default:
  //       return "There was an error signing up. Please try again later. You can always use our support for help.";
  //   }
  // };
  const SuggestSolutions = (input: any): string | null => {
    switch (input) {
      case "auth/email-already-in-use": return "Try logging in or use a different email.";
      case "auth/invalid-email": return "Check format.";
      case "auth/operation-not-allowed": return "Contact support.";
      case "auth/weak-password": return "Choose a stronger one.";
      case "auth/user-disabled": return "Contact support.";
      case "auth/user-not-found": return "Check email or create new account.";
      case "auth/wrong-password": return "Try again.";
      case "auth/too-many-requests": return "Wait and try again.";
      case "auth/network-request-failed": return "Check internet connection.";
      default: return "Try again later or contact support.";
    }
  };
  

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User signed up successfully")

      // User created successfully
    } catch (error: any) {
      toast({
        title: "Uh oh! Something went wrong with your SignUp.",
        description: (<div className='flex items-start justify-start bg-primary-foreground rounded-md text-xs flex-col space-y-1.5 p-3 mt-1'>
        <span className="text-muted-foreground">{`Error: ${EnhancedErrors(error.code)}`}</span>
        <span className="text-muted-foreground">{`Possible Solution: ${SuggestSolutions(error.code)}`}</span>
      </div>),
      })
      // toast({
      //   title: "You submitted the following values:",
      //   description: (
      //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
      //       <code className="text-white">{JSON.stringify(error, null, 2)}</code>
      //     </pre>
      //   ),
      // })
      // Handle error
      // alert(error)
      // toast("Oh no you got some errors!", {
      //   description: (<div className='flex items-start justify-start text-muted-foreground text-xs flex-col'>
      //   <span>{`Error is ${error.code}`}</span>
      //   <span>{`Possible Solution: ${SuggestSolutions(error.code)}`}</span>
      // </div>),
      //   action: {
      //     label: "Okay",
      //     onClick: () => console.log("Okay"),
      //   },
      // })
      // toast({
      //   title: "Uh oh! Something went wrong with your SignUp.",
      //   description: `Error is ${extractText(error.message)} ${error.code}`,
      //   action: <ToastAction altText="Try again">Try again</ToastAction>,
      // })
    }
  };

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("User signed in successfully")
      // User signed in successfully
    } catch (error) {
      // Handle error
      alert(error)
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>Sign Up</button>

      <h1>Sign In</h1>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default MyAuthComponent;