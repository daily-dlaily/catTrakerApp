import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAJCOXk1wIkNnfRa6JCg4n9qJpEGUJX2-M",
    authDomain: "cat-tracker-c3947.firebaseapp.com",
    projectId: "cat-tracker-c3947",
    storageBucket: "cat-tracker-c3947.appspot.com",
    messagingSenderId: "150300237791",
    appId: "1:150300237791:web:1d7831d08a4f952d8fae6a"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;