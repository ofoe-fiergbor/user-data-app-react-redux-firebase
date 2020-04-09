import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyD4HwHxI5VH50NqqVYYXrXrMXOkiU2w2m0",
    authDomain: "user-data-app-41500.firebaseapp.com",
    databaseURL: "https://user-data-app-41500.firebaseio.com",
    projectId: "user-data-app-41500",
    storageBucket: "user-data-app-41500.appspot.com",
    messagingSenderId: "21191936562",
    appId: "1:21191936562:web:161db448f1ee3ee5baca2b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase