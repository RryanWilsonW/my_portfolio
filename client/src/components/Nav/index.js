import React from 'react';
import { Link }from 'react-router-dom';
import './style.css';
const Nav = () => {
    return (
        <nav className='navBar'>
                <ul className='navItems'>
                        <Link className='link' to='/'>About</Link>
                        <Link className='link' to='/portfolio'>Portfolio</Link>
                        <Link className='link' to='/contact'>Contact</Link>
                </ul>
        </nav>

    )
};

export default Nav;