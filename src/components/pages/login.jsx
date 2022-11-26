import React from 'react'
import {useState} from 'react';
import {useNavigate , Link} from 'react-router-dom';
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';

function Login() {

  const [error , seterr] = useState(false);
  const navigate = useNavigate();
  
   const handelSubmit = async (e) => {
     e.preventDefault()
     const email = e.target[0].value;
     const password = e.target[1].value;

try{
   await signInWithEmailAndPassword(auth, email, password)
   navigate('/')
}
catch(error){
   seterr(true);
 } 
 
}; 


  return (
    <div className="formContainer">
    <div className='formWrapper'>
        <span className="logo">Let's Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handelSubmit}>
            <input type='email' placeholder='Email'></input>
            <input password='password' placeholder='Password'></input>
            <button>Sign In</button>
            { error && <span>Something went wrong</span> }
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
        </div>    
    </div>
  )
}

export default Login;