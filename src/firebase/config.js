import firebase from "firebase/app";
import "firebase/storage"; //tostore our images
import "firebase/firestore"; //database

var firebaseConfig = {
  apiKey: "AIzaSyDojtLgbOlNGsXXQQffK2HdOzalbhDJqkk",
  authDomain: "ash-photogallary.firebaseapp.com",
  projectId: "ash-photogallary",
  storageBucket: "ash-photogallary.appspot.com",
  messagingSenderId: "186175180113",
  appId: "1:186175180113:web:e7f4d3e5defbed4ca1d770",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFireStore, timeStamp };
