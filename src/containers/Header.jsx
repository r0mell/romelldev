import React from 'react'
import logo from '../assets/Header Illustration.png';
import { VscFoldDown } from 'react-icons/vsc';

const Header = () => {
   return (
      <div className='header-container section__padding__header' id='header'>

         <div className='header-image'>
            <img src={logo} alt="" />

         </div>

         <div className='header-content'>
            <h1>[ Welcome to my personal portfolio ]</h1>
            <a href="#about"><VscFoldDown color='#81afdd' size="2.5rem" /></a>
         </div>
      </div>


   )
}

export default Header;

