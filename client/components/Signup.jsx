import React from "react";
import SignupForm from "./SignupForm.jsx"
import { withRouter } from 'react-router-dom'

function Signup () {
  return (
    <div className="loginContainer">
    <div className="loginFormContainer"> 
      <h2 >SignUp</h2>
      <SignupForm />
    </div>
    </div>
  )
}

export default withRouter(Signup)