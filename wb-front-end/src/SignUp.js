import "./css/SignUp.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const logInUrl = `${process.env.REACT_APP_SERVER_URL}users/signup`;

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
  
  const [username,setUserName] = useState("");
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [university,setUniversity] = useState("");
  const [password,setPwd] = useState("");

  return(
    <div className="sign-up-form">
      <form>
        <p>
          <label className = "input-label-sign-up">Name </label>
          <input type = "text"  name = "name" 
             className ="form-control-sign-up" onChange = { ({ target }) => setName(target.value) }
             required 
          />
        </p>
        <p>
          <label className = "input-label-sign-up">Username </label> 
          <input type = "text"  name = "username" 
            className ="form-control-sign-up" onChange = { ({ target }) => setUserName(target.value) }
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
          <input type = "text"  name = "university"  className ="form-control-sign-up" 
            onChange = { ({ target }) => setUniversity(target.value) }
            required
          />
        </p>
       <p> 
       <label className = "input-label-sign-up">confirm password</label> 
       <input type = "password"  name = "password" className ="form-control-sign-up"
          onChange = { ({ target }) => setPwd(target.value) }
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
                name , username ,
                password , email , university 
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