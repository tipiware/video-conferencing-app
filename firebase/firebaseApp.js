import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyDuUnrvoUaUvbHc4XzvDfZq8lvvqskxpg4",
  authDomain: "project-app-1a1bb.firebaseapp.com",
  databaseURL: "https://project-app-1a1bb-default-rtdb.firebaseio.com",
  projectId: "project-app-1a1bb",
  storageBucket: "project-app-1a1bb.appspot.com",
  messagingSenderId: "1017609042108",
  appId: "1:1017609042108:web:ae8ff57b2ac93a4fcc78b9",
  measurementId: "G-87B0K46EL0"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
//   firebase.analytics();

  
export const auth = firebase.auth();
export const database = firebase.database();
export const storage = firebase.storage();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const googleSignIn = () => auth.signInWithPopup(googleProvider);

const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({
    'display': 'popup'
  });
export const facebookSignIn = () => auth.signInWithPopup(facebookProvider);

export default firebase;