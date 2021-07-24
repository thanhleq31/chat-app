// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyAN51_mhYQ-FfaL9NOwjXW8yHYuLuAIm_g",
    authDomain: "trot-f7618.firebaseapp.com",
    projectId: "trot-f7618",
    storageBucket: "trot-f7618.appspot.com",
    messagingSenderId: "247757097092",
    appId: "1:247757097092:web:e6da153016c21fe32c1ad1",
    measurementId: "G-XC9G5WL761",
  })
  .auth();
