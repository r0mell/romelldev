import React from 'react';

const ProyectCard = ({ proyect }) => {
   return (
      <div className='proyect-card-container'>
         <div className='proyect-card-image'>
            <img src={proyect.image} alt={proyect.title} />

         </div>
         <div className='proyect-card-content'>
            <div className='proyect-card-content-info'>
               <h3>{proyect.title}</h3>
               <p>{proyect.description}</p>
            </div>

            <div className='proyect-card-content-taks'>
               {proyect.tasks.map((task, index) => (
                  <p key={index}>{task}</p>
               ))}

            </div>
            <div className='proyect-card-content-links'>
               <a href={proyect.code} target="_blank" rel="noreferrer">Code</a>
               <a href={proyect.source} target="_blank" rel="noreferrer">Source</a>
            </div>

         </div>
      </div>
   )
}

export default ProyectCard;
