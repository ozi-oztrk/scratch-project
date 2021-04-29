import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import '../../html-scss/style.css'
export default function App() {
  return (
      <main id="loginContainer">
        <Router>
          <Switch>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </Router>
      </main>
  );
}
