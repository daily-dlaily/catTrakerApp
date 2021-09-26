import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css"
import App from './App';
import {createStore, applyMiddleware} from "redux";
import rootReducer from "./Reducers/rootReducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {getFirebase, ReactReduxFirebaseProvider} from "react-redux-firebase"
import firebase from "./components/config/firebaseConfig"
import { createFirestoreInstance } from "redux-firestore";


const store = createStore(
  
  rootReducer, applyMiddleware(thunk.withExtraArgument({getFirebase}))
  
  );
const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance,
} 


ReactDOM.render(
  
    <Provider store = {store}>
      <ReactReduxFirebaseProvider{...rrfProps}>
        <App />
        </ReactReduxFirebaseProvider>
    </Provider>,
  
  document.getElementById('root')
);


