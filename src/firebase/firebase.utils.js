import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBrMJLXLHTBUJTrqcvi8TPiyUCdOdnrYyE",
  authDomain: "black-b2f28.firebaseapp.com",
  projectId: "black-b2f28",
  storageBucket: "black-b2f28.appspot.com",
  messagingSenderId: "563667310877",
  appId: "1:563667310877:web:d85677f19f7d60491169f4",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
