import React from 'react'
import "../style.scss"
import zoom from '../components/Images/zoom.png'
import add from '../components/Images/add-user.png'
import call from '../components/Images/phone-call.png'
import Messages from './Messages'
import Input from './Input'
import { useContext } from 'react'
import { ChatContext } from '../context/chatContex'


function Chat() {

  const {data} = useContext(ChatContext)
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={zoom} alt='c' />
          <img src={add} alt='v' />
          <img src={call} alt='va' />
        </div>
      </div>
      <Messages />
        <Input />
    </div>
  )
}

export default Chat;