import axios from 'axios';
import React, { useState } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

  const SignUpForm  = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await axios.post({
    username: username,
    password: password,
    fullName: fullName,
    email: email
      });
    if (result){
      setRedirect(true);
    }
  }

  useEffect(()=> {
    if (redirect === true){
      return <Redirect to={{
        pathname: '/Home',
        state: {
          username: username,
          password: password,
          fullName: fullName,
          email: email
        }
      }} />;
    }
  })

  return (
    <div id="signInBox">
        <form id="form" type="submit" method="POST" action='/login' enctype="application/JSON">
            <h1>Log In</h1>
            <div id='infoBox'>
                <input class="input" value={username} id="loginUsernameInput" name="username" type="text" placeholder="username" onChange={e => setUsername}></input><br/>
                <input class="input" value={password} id='loginPasswordInput' name="password" type="password" placeholder="password" onChange={e => setPassword}></input><br/>
                <input class="input" value={fullName} id="loginFullNameInput" name="username" type="text" placeholder="username" onChange={e => setFullName}></input><br/>
                <input class="input" value={email} id='loginEmailInput' name="password" type="password" placeholder="password" onChange={e => setEmail}></input><br/>
                <input  id="button" type='submit' value='login'/>
                <a id="signInLink" href="/signup">Sign Up</a>
            </div>       
                 {/* <img id="logo" src="/client/assets/BR_Logo_White.png" height="150px" width="150px"/>  */}
        </form>
    </div>
  )
}

export default withRouter(SignUpForm);