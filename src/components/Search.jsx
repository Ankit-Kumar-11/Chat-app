import React from 'react'
import "../style.scss"

function Search() {
  return (
      <div className="search">
        <div className="searchForm">
          <input type='text' placeholder='Find a user'></input>
        </div>
        <div className="userChat">
         <img src='https://images.pexels.com/photos/11720281/pexels-photo-11720281.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='no'></img>

          <div className="userChatInfo">
              <span>Tarang</span>
          </div>
        </div>
      </div>
  )
}

export default Search