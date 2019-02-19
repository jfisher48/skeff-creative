import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDhG4xhq2i8bCVdtU7TsyZOs9p7aPK7WVM",
  authDomain: "skeffcreative.firebaseapp.com",
  databaseURL: "https://skeffcreative.firebaseio.com",
  projectId: "skeffcreative",
  storageBucket: "skeffcreative.appspot.com",
  messagingSenderId: "572773281930"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
