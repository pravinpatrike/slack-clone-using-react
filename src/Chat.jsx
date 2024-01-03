import React, { useEffect, useState } from 'react'
import './Chat.css'
import { useParams } from 'react-router-dom'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import db from './firebase';
import Message from './Message';
import ChatInput from './ChatInput';



function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null)
  const [roomMessages, setRoomMessages] = useState([])

  useEffect(() => {
    if (roomId) {
      db.collection('rooms').doc(roomId)
        .onSnapshot(snapshot => {
          setRoomDetails(snapshot.data())
        })

      db.collection('rooms').doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot(snapshot => {
          setRoomMessages(
            snapshot.docs.map(doc => doc.data())
          )
        }
        )
    }
  }, [roomId])

  // console.log(roomDetails);
  // console.log(roomId);




  return (
    <div className='chat'>
      {/* <h2>You are in the room {roomId} </h2> */}

      <div className="chat__header">

        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>
              # {roomDetails?.name}
            </strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>


        <div className="chat__headerRight">
          <InfoOutlinedIcon />
        </div>
      </div>

      <div className="chat__messages">
        {roomMessages.map(({ message, timestamp, user, userImage }) => (

          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>
      

        <ChatInput channelName={roomDetails?.name} channelId={roomId} />
      
    </div>
  )
}

export default Chat
