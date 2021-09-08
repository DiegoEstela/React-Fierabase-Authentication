import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyATCpEsRra6jvI5EgPR62GWG0fguff891g",
  authDomain: "react-authentication-7190d.firebaseapp.com",
  projectId: "react-authentication-7190d",
  storageBucket: "react-authentication-7190d.appspot.com",
  messagingSenderId: "15643459801",
  appId: "1:15643459801:web:2255c31b1ca91af857bec8",
});

export const auth = firebase.auth();

export default app;
