import React from 'react'
import { useState } from 'react'
import "../style.scss"
import { collection, query, where ,setDoc, getDocs ,getDoc, doc , updateDoc, serverTimestamp} from "firebase/firestore";
import {db} from '../firebase';
import { useContext } from 'react';
import {AuthContext} from '../context/AuthContext'

function Search() {
  const [userName , setName] = useState("");
  const [user , setUser] = useState(null);
  const [err , setErr] = useState(false);

  const {currentUser} = useContext(AuthContext);

  const handelSearch = async (e) => {
    const q = query(collection(db , 'users'), where("displayName" , "==" , userName));

    try {

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      });
    }catch (err) {
      setErr(true);
    }
    };

  const handelKey = (e) => {
   e.code === "Enter" && handelSearch();
  };

  const handelSelect = async () => {

    // check whether the group(chats in firestore) exists , if not create new one
    const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
    try {  
      const res = await getDoc(doc(db , 'chats' , combinedId));

      if(!res.exists()) {
        await setDoc(doc(db , 'chats' , combinedId),{messages: [] });

        //create user chats
        await updateDoc(doc(db, 'userChats' , currentUser.uid), {
          [combinedId+".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId+".date"]: serverTimestamp()
        });
        await updateDoc(doc(db, 'userChats' , user.uid), {
          [combinedId+".userInfo"]: {
            uid:currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [combinedId+".date"]: serverTimestamp()
        });
      }
    } catch (err) {
     setErr(true)
    };
    
   setUser(null);
   setName("") 
   
  };

  return (
      <div className="search">
        <div className="searchForm">
          <input type='text' placeholder='Find a user' onKeyDown={handelKey} onChange={(e)=>setName(e.target.value)} value={userName}></input>
        </div>
        {err && <span>User not found!</span>}
        {user && (
        <div className="userChat" onClick={handelSelect}>
         <img src={user.photoURL} alt='no'></img>

          <div className="userChatInfo">
              <span>{user.displayName}</span>

          </div>
        </div>
        )}
      </div>
  )
}

export default Search