import axios from "axios";
import React, { useState } from "react";
import { Redirect, withRouter } from "react-router-dom";

function LoginForm() {
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleChange = (event) => {
    value = event.target.value;
    [event.target.name] = value;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: email, password: password})
    }).then(response => {
      if (response.type === 'basic'){
        console.log(response)
        setRedirect(true);
      }
    })
  };

  const handleSubmitGoogle = async (event) => {
    event.preventDefault();
    const result = await axios.get("/loginGoogle");
    if (result) {
      console.log(result);
    }
  };
    if (redirect === true) {
      console.log('redirect attempt in useEffect')
      return (
        <Redirect
          to={{
            pathname: "/home",
            state: {
              password: password,
              email: email
              // fullName: fullName,
            },
          }}
        />
      );
    };
  // });

  return (
    <div id="signInBox">
      <form id="loginForm" type="submit" onSubmit={handleSubmit} method="POST" action="/login">
        <h1 id="loginTitle">Better Reads</h1>
        <h2 id="loginSubtext">login</h2>
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
          <a id="loginLink" href="/signup">
            No account? Sign Up
          </a>
        </div>
        <div id="socialLoginContainer" >
          <a id="twitterLink" href="auth/google">
            <div id="twitterAuth">
              <img id="googleImg" src="http://pngimg.com/uploads/google/google_PNG19630.png" alt=""/>
              <p id="googleButtonText">Sign in</p>
            </div>
          </a>
          <a id="twitterLink" href="auth/twitter">
            <div id="twitterAuth">
              <img id="twitterImg" src="http://pngimg.com/uploads/twitter/twitter_PNG95259.png" alt=""/>
              <p id="twitterButtonText">Sign in</p>
            </div>
          </a>
          <a id="twitterLink" href="auth/facebook">
            <div id="twitterAuth">
              <img id="fbImg" src="https://balancedlifeskills.com/wp-content/uploads/2017/03/facebook-logo-large.png" alt=""/>
              <p id="fbText">Sign in</p>
            </div>
          </a>
        </div>

        {/* <img id="logo" src="/client/assets/BR_Logo_White.png" height="150px" width="150px"/>  */}
      </form>
    </div>
  );
}

export default withRouter(LoginForm);
