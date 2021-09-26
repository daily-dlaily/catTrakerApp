import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCxT5oD7obvuKIrbPN2INJWcmcW8neestc",
  authDomain: "addcat-6511e.firebaseapp.com",
  projectId: "addcat-6511e",
  storageBucket: "addcat-6511e.appspot.com",
  messagingSenderId: "407501229098",
  appId: "1:407501229098:web:58d15164861142c7ffc753"
};

  // Initialize Firebase

try {
	firebase.initializeApp(firebaseConfig);
	firebase.firestore();
	console.log("Firebase Initialized");
} catch (err) {
	console.log("Error Initializing Firebase");
}

export default firebase;