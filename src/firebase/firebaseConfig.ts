import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: 'AIzaSyBfHoy1NjAhx6Jp4AfHto_dCCQNOqkuEg8',
    authDomain: 'portafolio2-0.firebaseapp.com',
    databaseURL: 'https://portafolio2-0-default-rtdb.firebaseio.com',
    projectId: 'portafolio2-0',
    storageBucket: 'portafolio2-0.appspot.com',
    messagingSenderId: '879996415644',
    appId: '1:879996415644:web:cb285eaab4c70be8b28759',
    measurementId: 'G-9MG8GJ5MZQ'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

export default db
