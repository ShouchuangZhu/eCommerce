import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyApcY6Q5sTRElIGORbF_TtaFjEXx_PYnVQ",
    authDomain: "ecommerce-db770.firebaseapp.com",
    databaseURL: "https://ecommerce-db770.firebaseio.com",
    projectId: "ecommerce-db770",
    storageBucket: "",
    messagingSenderId: "714364919424",
    appId: "1:714364919424:web:21c0720a9e0eab39"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;