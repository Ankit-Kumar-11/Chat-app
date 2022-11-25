import React from 'react'
import {signOut} from 'firebase/auth';
import { auth } from '../firebase';

function Navbar() {
  return (
    <div className="navbar">
       <span className="logo">Let's Chat</span>
       <div className="user">
         <img src='https://images.pexels.com/photos/11720281/pexels-photo-11720281.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='no'></img>
         <span>Tarang</span>
         <button onClick={() => signOut(auth)}>Logout</button>
       </div>
    </div>
    
  )
}

export default Navbar