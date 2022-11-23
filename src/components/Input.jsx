import React from 'react'
import "../style.scss"
import add from '../components/Images/attachment.png'
import file from '../components/Images/add-photo.png'

function Input() {
  return (
    <div className='input'>
      <input type='text' placeholder='Type Something...'></input>
      <div className="send">
        <img src={add} alt='' />
        <input type='file' style={{display: 'none'}} id='file'/>
        <label htmlFor='file'>
          <img src={file} alt=''/>
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input
