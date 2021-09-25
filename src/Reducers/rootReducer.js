import {combineReducers} from "redux";
import { FirebaseReducer, firebaseReducer, FirestoreReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
const rootReducer = combineReducers({
    firebase: FirebaseReducer,
    firestore: FirestoreReducer,
});

export default rootReducer;