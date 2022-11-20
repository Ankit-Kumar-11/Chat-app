import React from 'react'
import add from "../../img/add.svg"

function Register() {
  return (
    <div className="formContainer">
    <div className='formWrapper'>
        <span className="logo">Let's Chat</span>
        <span className="title">Register</span>
        <form>
            <input type='name' placeholder='Your Name'></input>
            <input type='email' placeholder='Email'></input>
            <input password='password' placeholder='Password'></input>
            <input style={{display: 'none'}} type='file' id='file' />
            <label htmlFor='file'>
              <img src={add} alt='none'></img>
              <span>Add an avatar</span>
            </label>
            <button>SignUp</button>
        </form>
        <p>Do you have an account? Login</p>
        </div>    
    </div>
  )
}

export default Register