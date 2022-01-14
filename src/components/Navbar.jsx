import React, { useState } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import logo from '../assets/GPT-3.svg'

const Menu = () => (
  <>
    <p><a href="#about">About</a> </p>
    <p><a href="#skills">Skills</a></p>
    <p><a href="#proyects">Proyects</a></p>
    <p><a href="#footer">Contact</a></p>
  </>

)

const Navbar = () => {

  const [toogleMenu, setToogleMenu] = useState(false);


  return (
    <>
      <div className="navbar-container">

        <div className="navbar-links">
          <div className="navbar-links-logo">
            <img src={logo} alt="GPT-3" />
          </div>

          <div className='navbar-links-routes'>
            <Menu />
          </div>
        </div>

        <div className="navbar-sign">
          {/* <p>Sing in</p>
          <button type='button'>Sign up</button> */}
          <a href="https://github.com/r0mell" target="_blank" rel="noreferrer"><AiFillGithub color='#fff' size="2rem" /></a>
          <a href="https://www.linkedin.com/in/r0mell" target="_blank" rel="noreferrer"><AiFillLinkedin color='#fff' size="2rem" /></a>
          <a href="https://www.instagram.com/r0mell_fer/?hl=es-la" target="_blank" rel="noreferrer"><AiFillInstagram color='#fff' size="2rem" /></a>


        </div>

        <div className='navbar-menu'>

          {toogleMenu
            ? <RiCloseLine color='#fff' size={27} onClick={() => setToogleMenu(false)} />
            : <RiMenu3Line color='#fff' size={27} onClick={() => setToogleMenu(true)} />
          }
          {
            toogleMenu && (
              <div className="navbar-menu-container scale-up-center">
                <div className='navbar-menu-container-links '>
                  <Menu />
                  <div className="navbar-menu-container-links-sign">
                    <a href="https://github.com/r0mell" target="_blank" rel="noreferrer"><AiFillGithub color='#fff' size="2rem" /></a>
                    <a href="https://www.linkedin.com/in/r0mell" target="_blank" rel="noreferrer"><AiFillLinkedin color='#fff' size="2rem" /></a>
                    <a href="https://www.instagram.com/r0mell_fer/?hl=es-la" target="_blank" rel="noreferrer"><AiFillInstagram color='#fff' size="2rem" /></a>
                  </div>
                </div>
              </div >
            )
          }
        </div>
      </div>
    </>
  )
}

export default Navbar;
