import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { doc, onSnapshot } from "firebase/firestore";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import {db} from '../firebase'


function Chats() {

  const {currentUser} = useContext(AuthContext)
  const [chats , setChats] = useState([])

  useEffect(() => {
      const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
    setChats(doc.data());
  });

    return () => { 
      unsub();
    }
  };
  currentUser.uid && getChats();
  },[currentUser.uid])

  
  return (
    <div className="chats">
     {Object.entries(chats)?.map((chat) => (
      <div className="userChat" key={chat[0]}>
        <img src='https://images.pexels.com/photos/7799327/pexels-photo-7799327.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' 
        alt='noo'>
        </img>
        <div className="userChatInfo">
              <span>{chat[1].displayName}</span>
              <p>{chat[1].lastMessage?.text}</p>
          </div>
      </div>
     ))};
    </div>
  )
}

export default Chats;