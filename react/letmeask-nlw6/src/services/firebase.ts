import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBFtVsZBSC9si8BiUvgW-UchvLKCNJK0b8",
  authDomain: "letmeask-156e3.firebaseapp.com",
  databaseURL: "https://letmeask-156e3-default-rtdb.firebaseio.com",
  projectId: "letmeask-156e3",
  storageBucket: "letmeask-156e3.appspot.com",
  messagingSenderId: "794553347294",
  appId: "1:794553347294:web:73319c53e25eb091d4264f"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }