import React from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@mui/icons-material/InsertComment';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar__header">
        <div className="sidebar__info">
        <h2>programmers hub</h2>
        <h3>
            <FiberManualRecordIcon/>
            Pravin Patrike
        </h3>
      </div>
        <CreateIcon/>
        
    </div>
        <SidebarOption Icon={<InsertCommentIcon/>} title="Threads"/>
        <SidebarOption  title="youtube"/>
    </div>
  )
}

export default Sidebar
