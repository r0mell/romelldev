import React from 'react';

import perfil from '../assets/RP2.jpg';

const About = () => {
   return (
      <div className='about-container section__padding' id='about'>
         <div className="about-image">
            <img src={perfil} alt="posibilidades " />
         </div>
         <div className='about-content'>
            <h2>Hola, Soy Rommel Pumisacho</h2>
            <p>Desarrollador de software y entusiasta de nuevas tecnologías, apasionado por transformar ideas en asombrosos productos. He estado trabajando en la industria de la tecnología por +2 años. </p>
            <p>Estoy convencido que el acceso a tecnología pude mejorar nuestra sociedad y desarrollar un mejor futuro.</p>
         </div>
      </div>
   )
}

export default About;
