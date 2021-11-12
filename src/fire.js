// fire.js
import firebase from 'firebase'

const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG)

try {
      firebase.initializeApp(firebaseConfig)
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}
const fire = firebase
export default fire
