import React from 'react'
import add from "../../img/add.svg"
import { createUserWithEmailAndPassword , updateProfile} from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {auth , storage ,db} from "../../firebase";
import { useState } from 'react';
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate , Link } from 'react-router-dom';

function Register() {

  const [error , seterr] = useState(false);
   const navigate = useNavigate();
   
    const handelSubmit = async (e) => {
      e.preventDefault()
      const displayName = e.target[0].value;
      const email = e.target[1].value;
      const password = e.target[2].value;
      const file = e.target[3].files[0];

try{
  const res = await createUserWithEmailAndPassword(auth, email, password)
  const storageRef = ref(storage, displayName);
  const uploadTask = uploadBytesResumable(storageRef, file);



uploadTask.on(
  (error) => {
    seterr(true);
  }, 
  () => {

    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
      await updateProfile(res.user ,{
        displayName,
        photoURL: downloadURL,
      });
      await setDoc(doc(db , 'users' , res.user.uid),{
        uid: res.user.uid,
        displayName,
        email,
        photoURL: downloadURL,
      });
      await setDoc(doc(db , 'userChats' , res.user.uid) , {})
      navigate('/');
    });
  } 
);

}
catch(error){
    seterr(true);
  } 
  
}; 
  return (
    <div className="formContainer">
    <div className='formWrapper'>
        <span className="logo">Let's Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handelSubmit}>
            <input type='name' placeholder='Your Name'></input>
            <input type='email' placeholder='Email'></input>
            <input password='password' placeholder='Password'></input>
            <input style={{display: 'none'}} type='file' id='file' />
            <label htmlFor='file'>
              <img src={add} alt='none'></img>
              <span>Add an avatar</span>
            </label>
            <button>SignUp</button>
            {error && <span>Something went wrong</span>}
        </form>
        <p>Do you have an account? <Link to="/login">Login</Link></p>
        </div>    
    </div>
  )
}

export default Register