import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCG7SfCqkrvvQIstZiQAaMpWNBeGtL2zR8",
    authDomain: "crw-clothing-d2bc3.firebaseapp.com",
    projectId: "crw-clothing-d2bc3",
    storageBucket: "crw-clothing-d2bc3.appspot.com",
    messagingSenderId: "34940245344",
    appId: "1:34940245344:web:109ce32e0b18dc720e7a05"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;