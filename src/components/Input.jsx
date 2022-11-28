import React, { useContext } from 'react'
import "../style.scss"
import add from '../components/Images/attachment.png'
import file from '../components/Images/add-photo.png'
import { useState } from 'react'
import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore'
import { v4 as uuid } from 'uuid';
import { db, storage } from '../firebase'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/chatContex'

function Input() {

  const [text, setText] = useState("")
  const [img, setImg] = useState(null)

  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext)

  const handelSend = async () => {
    if (img) {

      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, img);


      uploadTask.on(
        (error) => {
         // seterr(true);
        },
        () => {

          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              })
            })
          });
        }
      );

    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now()
        })
      })
    }

    await updateDoc(doc(db, "userChats" , currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text, 
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "userChats" , data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text, 
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setImg(null)
    setText("")
  }

  return (
    <div className='input'>
      <input type='text' placeholder='Type Something...' onChange={e => setText(e.target.value)} value={text}></input>
      <div className="send">
        <img src={add} alt='' />
        <input type='file' style={{ display: 'none' }} id='file' onChange={(e => setImg(e.target.files[0]))} />
        <label htmlFor='file'>
          <img src={file} alt='' />
        </label>
        <button onClick={handelSend}>Send</button>
      </div>
    </div>
  )
}

export default Input
