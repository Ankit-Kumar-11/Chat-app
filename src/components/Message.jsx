import React from 'react'


function Message() {
  return (
    <div className='message'>
        <div className="messageInfo">
            <img src='https://images.pexels.com/photos/7799327/pexels-photo-7799327.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='no' />
            <span>Just now</span>
        </div>
        <div className="messageContent">
            <p>Hello</p>
            <img src='https://images.pexels.com/photos/7799327/pexels-photo-7799327.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='mm' />
        </div>
    </div>
  )
}

export default Message