import React from "react";
import SignUpForm from "./SignUpForm.jsx"
import withRouter from 'react-router-dom'

const SignUp = () => {
  return (
    <div className="loginContainer">
    <div className="loginFormContainer"> 
      <h2 >Login</h2>
      <SignUpForm />
    </div>
    </div>
  )
}

export default withRouter(SignUp)