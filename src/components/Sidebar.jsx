import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import db  from '../firebase';
import SidebarOption from './SidebarOption';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import AddIcon from '@mui/icons-material/Add';


function Sidebar() {
  const [Channels, setChannels] = useState([])

  useEffect(() => {
    db.collection('rooms').onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name
        }))
      )
    )
  }, [])

  return (
    <div className='sidebar'>
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>programmers hub</h2>
          <h3>
            <FiberManualRecordIcon />
            Pravin Patrike
          </h3>
        </div>
        <CreateIcon />

      </div>
      <SidebarOption Icon={<AddIcon />} title="Threads" />
      <SidebarOption Icon={<AddIcon />} title="Saved items" />
      <SidebarOption Icon={<AddIcon />} title="Channel browser" />
      <SidebarOption Icon={<AddIcon />} title="people & user groups" />
      <SidebarOption Icon={<AddIcon />} title="Apps" />
      <hr />
      <SidebarOption Icon={<AddIcon />} title="Channels" />

      <SidebarOption Icon={<AddIcon />} addChannelOption="addChannel" title="Add Channel" />

      {Channels.map(channel => (
        <SidebarOption key={channel.id} title={channel.name} id={channel.id} />
      ))}



    </div>
  )
}

export default Sidebar
