import React from 'react'
import './Header.css'
import Avatar from '@mui/icons-material/AccountCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { useStateValue } from './StateProvider';


function Header() {
  const [{user}] = useStateValue();
  
  return (
    <div className='header'>
        <div className="header__left">
          <img
          className='header__avatar'
          alt={user?.displayName}
          src={user?.photoURL} />
          <AccessTimeIcon/>
        
        </div>

        <div className="header__search">
          <SearchIcon/>
          
          <input placeholder='Search Pravin Patrike' />
        </div>
        <div className="header__right">
          <HelpOutlineOutlinedIcon />
        </div>
    </div>
  )
}

export default Header
