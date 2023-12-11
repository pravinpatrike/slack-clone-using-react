import React from 'react'
import './Header.css'
import Avatar from '@mui/icons-material/AccountCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';


function Header() {
  return (
    <div className='header'>
        <div className="header__left">
          <Avatar
          className='header__avatar'
          alt={'Pravin'}
          src='' />
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
