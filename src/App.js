import React from 'react';

import {BrowserRouter, Route} from "react-router-dom"
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import NavBar from './components/layout/NavBar';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/" exact component={Dashboard} />
      </BrowserRouter>
    </div>
  );
};

export default App;
