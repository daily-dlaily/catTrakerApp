import {combineReducers} from "redux";
import {  firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import catReducer from "./catReducer";

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    cat: catReducer,
});

export default rootReducer;