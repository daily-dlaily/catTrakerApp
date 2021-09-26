import React from 'react';
import {BrowserRouter, Route} from "react-router-dom"
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import NavBar from './components/layout/NavBar';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      
        <NavBar/>
        <ToastContainer />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" exact component={Dashboard} />
        
      </BrowserRouter>
    </div>
  );
};

export default App;
