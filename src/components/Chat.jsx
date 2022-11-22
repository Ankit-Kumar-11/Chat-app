import React from 'react'
import "../style.scss"
import zoom from '../components/Images/zoom.png'
import add from '../components/Images/add-user.png'
import call from '../components/Images/phone-call.png'


function Chat() {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Sima</span>
        <div className="chatIcons">
          <img src={zoom} alt='c' />
          <img src={add} alt='v' />
          <img src={call} alt='va' />
        </div>
      </div>
    </div>
  )
}

export default Chat;