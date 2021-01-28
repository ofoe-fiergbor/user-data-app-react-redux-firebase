import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD7yHvypJTfRNm16AhGzmKWcZGYODm5QrY",
  authDomain: "b4sdg-team-209.firebaseapp.com",
  databaseURL: "https://b4sdg-team-209.firebaseio.com",
  projectId: "b4sdg-team-209",
  storageBucket: "b4sdg-team-209.appspot.com",
  messagingSenderId: "9165668872",
  appId: "1:9165668872:web:f3607a9e654df10061c7bd"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase