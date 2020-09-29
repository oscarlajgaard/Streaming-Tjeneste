import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {


    return (
        <>
            <div className="navbar">
                
                <ul class="horizontal">
                    <Link to="/" className="nav-brand">
                        SvendborgHavn
                    </Link>
                    <li className="nav-item">
                        <Link to="/" className="nav-links">Hjem</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/browse" className="nav-links">Film</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/search" className="nav-links">Søg</Link>
                    </li>
                    <li className="nav-item rightli">
                        <Link to="/log-out" className="nav-links">Log ud</Link>
                    </li>
                    <li className="nav-item rightli">
                        <Link to="/profile" className="nav-links">Profil</Link>
                    </li>
                    
                </ul>
            </div>
        </>
    )
}
