// fire.js
// Datenbank Konfiguration - Nutzung: Firebase
// Integration erfolgt in login.js

// Aktuell: nur Login mit einem manuell vorher registrierten Nutzer
// malte.raeuchle@gmx.de & 123456

import firebase from 'firebase';

const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG);

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}
const fire = firebase;
export default fire;