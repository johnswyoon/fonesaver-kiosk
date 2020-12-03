import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCO4hWS9AEdUja98WRXlIq9ZCBDmejV1XM",
  authDomain: "fonesaver-kiosk.firebaseapp.com",
  projectId: "fonesaver-kiosk",
  storageBucket: "fonesaver-kiosk.appspot.com",
  messagingSenderId: "1091058162169",
  appId: "1:1091058162169:web:38d652f71ca1e7e6704528",
  measurementId: "G-FTD3CZ9B8H",
});

export const auth = app.auth();
export default app;
