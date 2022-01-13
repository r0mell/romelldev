import React from 'react';
import { Navbar, Footer } from '../components';
import { Header, Proyects, About, Skills } from '../containers';

import "../styles/main.scss";

const Home = () => {
   return (
      <div>
         <div className='home-container'>
            <Navbar />
            <Header />
         </div >
         <About />
         <Skills />
         <Proyects />
         <Footer />
      </div>
   )
}

export default Home;
