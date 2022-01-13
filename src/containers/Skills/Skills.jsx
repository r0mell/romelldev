import React from 'react';
import {
   html,
   css,
   js,
   react,
   sass,
   figma,
   github,
   btc,
   primereact,
   nodejs
} from './importImages';

const Skills = () => {
   return (
      <div className='skills-container section__margin' id='skills'>

         <div className='skills-header' >
            <h2>My Skills</h2>
         </div>

         <div className='skills-content'>

            <div className='skills-group'>

               <div className='skills-group-title'>
                  <h3>Tools</h3>
               </div>

               <div className='skills-group-icons'>
                  <img src={html} alt="" />
                  <p>Html</p>
               </div>
               <div className='skills-group-icons'>
                  <img src={css} alt="" />
                  <p>Css</p>
               </div>
               <div className='skills-group-icons'>
                  <img src={js} alt="" />
                  <p>JavaScript</p>
               </div>
               <div className='skills-group-icons'>
                  <img src={react} alt="" />
                  <p>React</p>
               </div>

            </div>


            <div className='skills-group'>

               <div className='skills-group-title'>
                  <h3>Tools</h3>
               </div>

               <div className='skills-group-icons'>
                  <img src={sass} alt="" />
                  <p>Scss</p>
               </div>
               <div className='skills-group-icons'>
                  <img src={figma} alt="" />
                  <p>Figma</p>
               </div>
               <div className='skills-group-icons'>
                  <img src={github} alt="" />
                  <p>Git/Github</p>
               </div>
            </div>

            <div className='skills-groupC'>

               <div className='skills-group-title'>
                  <h3>Others</h3>
               </div>

               <div className='skills-group-icons'>
                  <img src={primereact} alt="" />
                  <p>Primereact</p>
               </div>
               <div className='skills-group-icons'>
                  <img src={nodejs} alt="" />
                  <p>NodeJs</p>
               </div>
               <div className='skills-group-icons'>
                  <img src={btc} alt="" />
                  <p>Blockchain</p>
               </div>
            </div>
         </div>

      </div>
   )
}

export default Skills;
