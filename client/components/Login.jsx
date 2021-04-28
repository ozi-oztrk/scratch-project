import React from "react";
import LoginForm from "./LoginForm.jsx";
// import{ withRouter } from 'react-router-dom'

function Login() {
  return (
    <div className="loginContainer">
      <div className="loginFormContainer">
        <LoginForm />
      </div>
    </div>
  );
}

// export default withRouter(Login);
export default Login;
