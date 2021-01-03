// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDe3lq2UUndi9yYEqh0zlBSqI2RwoJTQmU",
  authDomain: "linkedin-ca838.firebaseapp.com",
  projectId: "linkedin-ca838",
  storageBucket: "linkedin-ca838.appspot.com",
  messagingSenderId: "828050779654",
  appId: "1:828050779654:web:9a61a52f9dabd4bd7a1d87",
  measurementId: "G-M2466RR8FJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
