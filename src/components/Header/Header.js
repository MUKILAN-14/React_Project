import React from 'react';
import './Header.css';
import logo from '../../Assets/Images/logo.png'
import search from'../../Assets/Images/search.png'
const Header = () =>{
    return(
        <header className='header'>
            <div className='logo'>
                <img src={logo}alt='stream studio'/>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button className="search-button">
                <img src={search} alt="Search" />
                </button>
            </div>
            <nav className="nav">
                <ul className="nav-list">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#movies">Movies</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );  
};

export default Header;