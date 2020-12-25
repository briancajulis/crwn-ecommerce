import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'crwn-db-655d1.firebaseapp.com',
  projectId: 'crwn-db-655d1',
  storageBucket: 'crwn-db-655d1.appspot.com',
  messagingSenderId: '320173008172',
  appId: '1:320173008172:web:a2d1ae2007e1c9fd81b889',
  measurementId: 'G-Z6XVSJZQ13',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider); // set the method of signin provided by firebase.auth()
export default firebase;
