import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

 
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

  useEffect(()=> {
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
  })

  return (
    <div id="signInBox">
        <form id="form" type="submit" onSubmit={handleSubmit} method="POST" action='/signup'>
            <h1>Sign Up </h1>
            <div id='infoBox'>
                <input className="input" value={email} id='loginEmailInput' name="email" type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required></input><br/>
                <input className="input" value={password} id='loginPasswordInput' name="password" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required></input><br/>
                <input className="input" value={fullName} id="loginFullNameInput" name="username" type="text" placeholder="Full Name" onChange={e => setFullName(e.target.value)}></input><br/>
                <input  id="button" type='submit' value='Signup'/>
                <a id="signInLink" href="/signup">Login</a>
            </div>       
                 {/* <img id="logo" src="/client/assets/BR_Logo_White.png" height="150px" width="150px"/>  */}
        </form>
    </div>
  )
}

export default withRouter(SignupForm);