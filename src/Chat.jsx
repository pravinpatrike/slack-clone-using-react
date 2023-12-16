import React, { useEffect , useState} from 'react'
import './Chat.css'
import { useParams } from 'react-router-dom'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import db from './firebase';



function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null)

  useEffect(() => {
    if (roomId) {
      db.collection('rooms').doc(roomId)
      .onSnapshot(snapshot => {
        setRoomDetails(snapshot.data())
      })
    }
  }, [roomId])

  console.log(roomDetails);




  return (
    <div className='chat'>
      <h2>You are in the room {roomId} </h2>

      <div className="chat__header">

        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>
              # general
            </strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>


        <div className="chat__headerRight">
          <InfoOutlinedIcon />
        </div>
      </div>
    </div>
  )
}

export default Chat
