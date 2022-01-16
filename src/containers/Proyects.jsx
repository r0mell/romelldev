import React from 'react';
import { ProyectCard } from '../components/index';
import proyects from './MyProyects';

const Proyects = () => {
   const [firstProyect, ...myProyects] = proyects;

   return (
      <div className='proyects-container section__padding' id='proyects'>
         <div className='proyects-heading'>
            <h1>Mis proyectos</h1>
         </div>
         <div className='proyects-information'>
            {/*  se crea un nuevo componente para cada card llamado proyectCard*/}
            <div className='proyects-information-groupA'>
               <ProyectCard key={firstProyect.id} proyect={firstProyect} />
            </div>
            <div className='proyects-information-groupB'>
               {myProyects.map((elem) => (
                  <ProyectCard key={elem.id} proyect={elem} />
               ))}
            </div>
         </div>
      </div>
   )
}

export default Proyects
