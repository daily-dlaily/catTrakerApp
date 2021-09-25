import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAJCOXk1wIkNnfRa6JCg4n9qJpEGUJX2-M",
    authDomain: "cat-tracker-c3947.firebaseapp.com",
    projectId: "cat-tracker-c3947",
    storageBucket: "cat-tracker-c3947.appspot.com",
    messagingSenderId: "150300237791",
    appId: "1:150300237791:web:1d7831d08a4f952d8fae6a"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
firebaseConfig.firestore();

export default firebase;