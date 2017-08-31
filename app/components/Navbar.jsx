import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (

        <div className="wrapper">

            <header className="header">
                <div className="container">
                    <h2> Navigation </h2>
                    <nav className='navigation'>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/campuses">Campuses</Link>
                            </li>
                            <li>
                                <Link to="/students">Students</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

        </div>

);

export default Navbar;