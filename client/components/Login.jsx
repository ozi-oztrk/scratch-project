import React from "react";
import LoginForm from "./LoginForm.jsx";
// import{ withRouter } from 'react-router-dom'
import '../../html-scss/style.css'
function Login() {
  return (
    <div id="loginFormContainer">
        <LoginForm />
    </div>
  );
}

// export default withRouter(Login);
export default Login;
