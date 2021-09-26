import {combineReducers} from "redux";
import {  firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import catReducer from "./catReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    cat: catReducer,
    auth: authReducer
});

export default rootReducer;