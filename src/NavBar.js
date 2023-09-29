import React from 'react';
import './NavBar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">Logo</a>
            </div>
            <ul className="navbar-menu">
                <li><a href="/">Anasayfa</a></li>
                <li><a href="/menu">Menü</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
