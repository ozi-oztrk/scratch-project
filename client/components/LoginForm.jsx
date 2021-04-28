import axios from "axios";
import React, { useState, useEffect } from "react";
import { Redirect, withRouter } from "react-router-dom";
import "../../html-scss/style.css";

function LoginForm() {
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleChange = (event) => {
    value = event.target.value;
    [event.target.name] = value;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await axios.post({
      email: email,
      password: password,
    });
    if (result) {
      console.log(result);
      setEmail(result.data.email);
      setPassword(result.data.passowrd);
      setRedirect(true);
    }
  };

  const handleSubmitGoogle = async (event) => {
    event.preventDefault();
    const result = await axios.get("/loginGoogle");
    if (result) {
      console.log(result);
    }
  };
  useEffect(() => {
    if (redirect === true) {
      return (
        <Redirect
          to={{
            pathname: "/Home",
            state: {
              password: password,
              email: email,
              fullName: fullName,
            },
          }}
        />
      );
    }
  });

  return (
    <div id="signInBox">
      <form
        id="form"
        type="submit"
        method="POST"
        action="/login"
        onSubmit={handleSubmit}
      >
        <h1>Log In</h1>
        <div id="infoBox">
          <input
            className="input"
            value={email}
            id="loginEmailInput"
            name="email"
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br />
          <input
            className="input"
            value={password}
            id="loginPasswordInput"
            name="password"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br />
          <input id="button" type="submit" value="login" />
          <a id="signInLink" href="/signup">
            Sign Up
          </a>
        </div>
        <button onClick={handleSubmitGoogle}>Login With Google</button>

        {/* <img id="logo" src="/client/assets/BR_Logo_White.png" height="150px" width="150px"/>  */}
      </form>
    </div>
  );
}

export default withRouter(LoginForm);
