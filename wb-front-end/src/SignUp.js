import "./css/SignUp.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const logInUrl = `${process.env.MANAGEMENT_SERVER_URL}createUser`;

const signup = (user) => {

  fetch(logInUrl, { 
    mode: 'cors',
    method : "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body : JSON.stringify(user) 
  }).then(res => res.json())
    .then(data => console(data));
};


const SignUp = () => {

  const [lastname,setLastName] = useState("");
  const [middlename,setMiddleName] = useState("");
  const [firstname,setFirstName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  return(
    <div className="sign-up-form">
      <form>
        <p>
          <label className = "input-label-sign-up">Firstname </label> 
          <input type = "text"  name = "firstname" 
            className ="form-control-sign-up" onChange = {({ target }) => setFirstName(target.value)}
            required
          />
        </p>
        <p>
          <label className = "input-label-sign-up">Middlename </label> 
          <input type = "text"  name = "middlename" 
            className ="form-control-sign-up" onChange = {({ target }) => setMiddleName(target.value)}
            required
          />
        </p>
        <p>
          <label className = "input-label-sign-up">Lastname </label>
          <input type = "text"  name = "lastname" 
             className ="form-control-sign-up" onChange = {({ target }) => setLastName(target.value)}
             required 
          />
        </p>
        <p>
          <label className = "input-label-sign-up">E-mail </label>
          <input type = "text"  name = "email" 
            className ="form-control-sign-up" onChange = { ({ target }) => setEmail(target.value) }
          />
        </p>
        <p>
          <label className = "input-label-sign-up">Password </label> 
          <input type = "text"  name = "password"  className ="form-control-sign-up" 
            onChange = { ({ target }) => setPassword(target.value) }
            required
          />
        </p>
       <p> 
       <label className = "input-label-sign-up">confirm password</label> 
       <input type = "password"  name = "password" className ="form-control-sign-up"
          onChange = { ({ target }) => setPassword(target.value) }
          required
        />
       </p>
       <p>
       <div className ="form-check">
          <input className ="form-check-input" type="checkbox" 
            value="" id="invalidCheck" required
          />
          <label className ="form-check-label" for="invalidCheck">
            Agree to terms and conditions
          </label>
          <div class="invalid-feedback">
            You must agree before submitting.
          </div>
        </div>
       </p>

       <p>
       <Link to="/home">  
         <input type="submit" title = "Log In" name = "logIn" 
            className ="button-submit-sign-up"
            onClick = {() => 
              signup({ 
                lastname, firstname,
                middlename, password,
                email
            })}
          />  
        </Link>
        </p>
        <p>
         <Link to="/"> Go Back </Link>
       </p>
    </form>
   </div>
  );
};

export default SignUp;