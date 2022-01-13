import React from 'react';

import perfil from '../assets/RP2.jpg';

const About = () => {
   return (
      <div className='about-container section__padding' id='about'>
         <div className="about-image">
            <img src={perfil} alt="posibilidades " />
         </div>
         <div className='about-content'>
            <h2>hi, My name is Rommel Pumisacho</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores placeat accusamus suscipit molestias quam, ab quod distinctio consequuntur voluptatem quas?</p>
         </div>

      </div>
   )
}

export default About;
