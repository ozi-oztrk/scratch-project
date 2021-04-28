import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
export default function App() {
  return(

    <div id="welcomeContainer">
      <h1>Welcome to Better Reads</h1>
      <main>
      <Router>
      <Switch>
        <Route 
          exact path = "/signup"
          component={Signup}
        />
        <Route 
          exact path = "/"
          component={Login}
        />
        <Route 
          exact path = "/home"
          component={Home}
        />
      </Switch>
      </Router>
      </main> 
    </div>
  )
}
