import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { doc, onSnapshot } from "firebase/firestore";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import {db} from '../firebase'
import { getAdditionalUserInfo } from 'firebase/auth';
import { ChatContext } from '../context/chatContex';


function Chats() {

  const {currentUser} = useContext(AuthContext)
  const {dispatch} = useContext(ChatContext)
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

  const handelSelect = (u) => {
    dispatch({type: "CHANGE_USER" , payload: u})
  }
  
  return (
    <div className="chats">
     {Object.entries(chats)?.map((chat) => (
      <div className="userChat" key={chat[0]} onClick={() => handelSelect(chat[1].userInfo)}>
        <img src={chat[1].userInfo.photoUrl} 
        alt='noo'>
        </img>
        <div className="userChatInfo">
              <span>{chat[1].userInfo.displayName}</span>
              <p>{chat[1].userInfo.lastMessage?.text}</p>
          </div>
      </div>
     ))}
    </div>
  )
}

export default Chats;