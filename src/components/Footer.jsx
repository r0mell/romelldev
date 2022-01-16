import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';

const Footer = () => {
   return (
      <div className='footer-container section__padding__footer' id='footer'>
         <div className="footer-contact">
            <div className="footer-heading">
               <h2>Trabajemos Juntos</h2>
            </div>
            <div className="footer-btn">
               <button >Contactame</button>

            </div>
            <div className="footer-icons">
               <section>
                  <a href="https://github.com/r0mell" target="_blank" rel="noreferrer"><AiFillGithub color='#fff' size="3rem" /></a>
                  <p>GitHub</p>
               </section>
               <section>
                  <a href="https://www.linkedin.com/in/r0mell" target="_blank" rel="noreferrer"><AiFillLinkedin color='#fff' size="3rem" /></a>
                  <p>Linkedin</p>
               </section>
               <section>
                  <a href="https://www.instagram.com/r0mell_fer/?hl=es-la" target="_blank" rel="noreferrer"><AiFillInstagram color='#fff' size="3rem" /></a>
                  <p>Instagram</p>
               </section>
               <section>
                  <a href="mailto:rommel.pumisacho@gmail.com?Subject=Contactame%20el%20asunto%20del%20mail" target="_blank" rel="noreferrer"><MdOutlineEmail color='#fff' size="3rem" /></a>
                  <p>Email</p>
               </section>

            </div>
         </div>
         <div className="footer-copyright">
            <p>Realizado por Rommel Pumisacho</p>
            <p> © R0mell 2021. All rights reserved.</p>
         </div>
      </div>
   )
}

export default Footer;

