import React from 'react';
import './style.css';
const Nav = () => {
    return (
        <nav className='navBar'>
                <ul className='row navItems'>
                    <li className='col-md-3'>About</li>
                    <li className='col-md-3'>Portfolio</li>
                    <li className='col-md-3'>Contact</li>
                    <li className='col-md-3'>Resume</li>
                </ul>
        </nav>

    )
};

export default Nav;