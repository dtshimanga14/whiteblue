import "./css/LogIn.css";
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link, Navigate, useNavigate } from "react-router-dom";
import Footer from "./Footer.js";

import { LOGIN_MUTATION } from "./mutation/login";
// const encodeFormData = (data) => {
//   return Object.keys(data)
//       .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
//       .join('&');
// };
const logInUrl = `${process.env.MANAGEMENT_SERVER_URL}login`;
const AUTH_TOKEN = 'auth-token';

const LogIn = () => {
  const navigate = useNavigate();
  const [username,setUserName] = useState("");
  const [password,setPassword] = useState("");

  const storeToken = async (token) => {
    await localStorage.setItem(AUTH_TOKEN, token);
    navigate("/home");
  };
  const [login] = useMutation(LOGIN_MUTATION, {
    variables: { username , password },
    onCompleted: ({ login }) => {
      login.token !== null ? 
      storeToken(login.token) : 
      navigate("/");
    }
  });
  const authToken = localStorage.getItem(AUTH_TOKEN);

  return(
    <div>
      <div className="tittle-writing-log-in">Welcome to Whiteblue </div>
      <div className="sign-in-form">
        <form className=""  >
          <div>Username </div> 
          <input type = "text" className ="form-input" 
            name = "username" onChange = {({ target }) => setUserName(target.value)}
            required
          />
          <p> 
            <div>Password</div> 
            <span className = ""><Link to="/"> forget password </Link></span>
            <input type = "password" className ="form-input" height="48"
              name = "password" onChange = {({ target }) => setPassword(target.value)}
              required
            />
          </p>
          <p>
            <button  title= "submit" name="submit"
              className="btn-sign-in" onClick = {()=> login({ username , password })}
            > 
              Sign in 
            </button > 
            <>
              {authToken !== null
              ? <Navigate replace to="/home" />
              : (<div className = "log-invalid-feedback">
                  your credential doesn't match any account, please use the link below in order to sign up
            </div>)}
            </>
          </p>
          <p>
            New to whiteblue ? <Link to="/signup">  Create an account. </Link>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default LogIn;