import React from 'react';
import NavBar from '../Navbar/navBar';
import { Link } from 'react-router-dom';

const Tips = () => {
    return (
        <>
        <NavBar/>
        <div className="tips-container">
            <h3>TIPS</h3>
        <div className="tips-links">
        <ul>
            <Link><li>Limpieza para mi mate</li></Link>
            <Link><li>Como curar tu mate de madera</li></Link>
            <Link><li>Cuidados de mates de calabaza</li></Link>
            
            
            
        </ul>
        </div>
        </div>
        </>
    )
}

export default Tips;