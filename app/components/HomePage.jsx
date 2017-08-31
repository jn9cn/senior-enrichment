import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
    
     <section className="hero">
       <div className="hero-body">
         <div className="container">
            <img src='https://media.giphy.com/media/pGjryqt2pEKZO/giphy.gif' />
            <h1 className="title">
            Margaret Hamilton Interplanetary Academy of JavaScript 
            </h1>
            <p> At select galaxies near you </p>
            <Link to="/campuses">Campuses</Link>
            <p></p>
            <Link to="/students">Students</Link>
         </div>
       </div>
     </section>

);

export default HomePage;