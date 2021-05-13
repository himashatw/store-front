import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAskqV-8e5RQSX2oKWT0Ai-ehkmqiPuKpc",
    authDomain: "store-clone-15786.firebaseapp.com",
    projectId: "store-clone-15786",
    storageBucket: "store-clone-15786.appspot.com",
    messagingSenderId: "924645172849",
    appId: "1:924645172849:web:b0bfbdeb7d1b05c4cb9dd0",
    measurementId: "G-WE16Z1P700"
})

const auth = firebase.auth();

export { auth };