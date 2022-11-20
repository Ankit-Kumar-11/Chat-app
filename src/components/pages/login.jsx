import React from 'react'
import add from "../../img/add.svg"

function Login() {
  return (
    <div className="formContainer">
    <div className='formWrapper'>
        <span className="logo">Let's Chat</span>
        <span className="title">Login</span>
        <form>
            <input type='email' placeholder='Email'></input>
            <input password='password' placeholder='Password'></input>
            <button>Sign In</button>
        </form>
        <p>You don't have an account? Register</p>
        </div>    
    </div>
  )
}

export default Login;