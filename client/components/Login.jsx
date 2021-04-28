import React from "react";
import LoginForm from "./LoginForm.jsx"
import withRouter from 'react-router-dom'

const Login = () => {
  return (
    <div className="loginContainer">
    <div className="loginFormContainer"> 
      <h2 >Login</h2>
      <LoginForm />
    </div>
    </div>
  )
}

export default withRouter(Login)