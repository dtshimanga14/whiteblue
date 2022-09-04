import "./css/LogIn.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Footer from "./Footer.js";

const encodeFormData = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
};
const logInUrl = `${process.env.REACT_APP_SERVER_URL}login`;

const signIn = (user) => {

  fetch(logInUrl, { 
    mode: 'cors',
    method : "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body : 'username=1&password=1234'
  }).then(res => res.json())
    .then(data => console(data));
};

const LogIn = () => {

  const [username,setUserName] = useState("");
  const [password,setPwd] = useState("");
  const [isTryLogin,setIsTryLogin] = useState(false);

  
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
              name = "password" onChange = {({ target }) => setPwd(target.value)}
              required
            />
          </p>
          <p>
          {/* <input type="submit" title = "Log In" name = "logIn" 
            className ="btn-sign-in"
            onClick = {() => 
              signIn({ 
                username : "mjose", 
                password : "1234" 
              })
          }/>   */}
            <Link to="/home">  
              <button  title= "submit" name="submit" type ="submit"
                className="btn-sign-in" onClick = {(e) => {
                  signIn({ username : "mjose", password : "1234"});
                  setIsTryLogin(true);
                  localStorage.setItem('token',true)
                }}
              > 
                Sign in 
              </button > 
            </Link>
            <p>
              {isTryLogin 
              ? (<div className = "log-invalid-feedback">
                    your credential doesn't match any account, please use the link below in order to sign up
                  </div>) 
              : null}
              </p>
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