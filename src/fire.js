// fire.js
// Datenbank Konfiguration - Nutzung: Firebase
// Integration erfolgt in login.js

// Aktuell: nur Login mit einem manuell vorher registrierten Nutzer
// malte.raeuchle@gmx.de & 123456

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID

};




try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}
const fire = firebase;
export default fire;