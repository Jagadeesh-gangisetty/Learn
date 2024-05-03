import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './Navbar.css';

import {Link} from 'react-router-dom';
export default function Navbar()
{
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [isHovered, setIsHovered] = useState(false);
    const [hoverId,setHoverId] = useState();
    
  
    const handleMouseEnter = (id) => {
      setIsHovered(true);
      setHoverId(id);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
    <>
       <div className='nav'>
          <div className='subject'>Java Spring Framework 6 with Spring Boot 3 - GJ</div>
          <div className='flexbox'  onClick={handleClick}><AccountCircleIcon style={{fontSize:'30px'}}></AccountCircleIcon><div className='name'>Jagadeesh</div><KeyboardArrowDownIcon></KeyboardArrowDownIcon></div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
          <MenuItem onClick={handleClose} className='item'>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Courses</MenuItem>
          <MenuItem onClick={handleClose}>Test Series</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
         
      </div>
      <div className='nav2'>
         <div 
            onMouseEnter={() =>handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
            className={isHovered && (hoverId===1)? 'bttnhover' : 'bttn1'}
            >
            <p><Link to = "/HomePage" className='Home'>Home</Link></p>
          </div>
          <div 
            onMouseEnter={() =>handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
            className={isHovered && (hoverId===2)? 'bttnhover' : 'bttn1'}
            >
            <p><Link to = "/Subjects" className='Home'>Courses</Link></p>
          </div>
         <div 
            onMouseEnter={() =>handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
            className={isHovered && (hoverId===3) ? 'bttnhover' : 'bttn1'}
            >
            <p><Link to = "/Courses" className='Home'>Test Series</Link></p></div>
         <div
          onMouseEnter={() =>handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
            className={isHovered && (hoverId===4) ? 'bttnhover' : 'bttn1'}><p><Link to = "/Courses" className='Home'>My Report</Link></p></div>

        <div
          onMouseEnter={() =>handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
            className={isHovered && (hoverId===4) ? 'bttnhover' : 'bttn1'}><p><Link to = "/Courses" className='Home'>Companies</Link></p></div>

        <div
          onMouseEnter={() =>handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
            className={isHovered && (hoverId===4) ? 'bttnhover' : 'bttn1'}><p>Book Store</p></div>
          </div>
          


    </>
    );
}