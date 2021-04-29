import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import render from 'react'
 
function SignupForm() {
  const [value, setValue] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleChange = (event) => {
    value = event.value;
    [event.target.name] = setValue(value);
  }

  const handleSubmit =  (event) => {
    event.preventDefault();
    axios.post('/signup', {
    email: email,
    password: password,
    fullName: fullName
      }).then(result => {
        console.log(result)
        if (result) setRedirect(true);
      })
  //   axios({
  //     method: 'get',
  //     url: '/signup',
  //     data: {
  //       email: email,
  //       password: password
  //     }
  //   }).then(result => console.log(result))
  }

  if (redirect === true){
    return <Redirect to={{
      pathname: '/Home',
      state: {
        email: email,
        password: password,
      fullName: fullName
        }
    }} />;
  }

  return (
    <div id="signInBox">
        <form id="signInForm" type="submit" onSubmit={handleSubmit} method="POST" action='/signup'>
            <h1 id="loginTitle" >Better Reads</h1>
            <h2 id="loginSubtext">signup</h2>

            <div id='infoBox'>
                <input className="input" value={email} id='loginEmailInput' name="email" type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required></input><br/>
                <input className="input" value={password} id='loginPasswordInput' name="password" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required></input><br/>
                <input className="input" value={fullName} id="loginFullNameInput" name="username" type="text" placeholder="Full Name" onChange={e => setFullName(e.target.value)}></input><br/>
                <input  id="button" type='submit' value='Signup'/>
                <a id="signInLink" href="/">Login</a>
            </div>  
            <div id="socialLoginContainer" >
          <div className="g-signin2"></div>
          <a id="twitterLink" href="twitter/auth">
            <div id="twitterAuth">
              <img id="twitterImg" src="http://pngimg.com/uploads/twitter/twitter_PNG95259.png" alt=""/>
              <p id="twitterButtonText">Sign in</p>
            </div>
          </a>
          <a id="twitterLink" href="twitter/auth">
            <div id="twitterAuth">
              <img id="fbImg" src="https://balancedlifeskills.com/wp-content/uploads/2017/03/facebook-logo-large.png" alt=""/>
              <p id="fbText">Sign in</p>
            </div>
          </a>
        </div>     
                 {/* <img id="logo" src="/client/assets/BR_Logo_White.png" height="150px" width="150px"/>  */}
        </form>
    </div>
  )
}

export default withRouter(SignupForm);