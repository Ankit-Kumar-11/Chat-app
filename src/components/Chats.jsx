import React from 'react'

function Chats() {
  return (
    <div className="chats">
      <div className="userChat">
        <img src='https://images.pexels.com/photos/7799327/pexels-photo-7799327.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' 
        alt='noo'>
        </img>
        <div className="userChatInfo">
              <span>Dhanno</span>
              <p>Hello</p>
          </div>
      </div>
      <div className="userChat">
         <img src='https://images.pexels.com/photos/11720281/pexels-photo-11720281.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='no'></img>

          <div className="userChatInfo">
              <span>Babli</span>
              <p>Nice one!</p>
          </div>
        </div>
        <div className="userChat">
         <img src='https://images.pexels.com/photos/11720281/pexels-photo-11720281.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='no'></img>

          <div className="userChatInfo">
              <span>Kanta</span>
              <p>Can you focus plz...</p>
          </div>
        </div>
    </div>
  )
}

export default Chats;