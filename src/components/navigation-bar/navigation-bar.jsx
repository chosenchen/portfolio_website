import React from 'react';
import { Link } from 'react-router-dom';

import {ReactComponent as Logo } from '../../images/logo.svg';
import './navigation-bar.scss';

const NavigationBar =()=>{
    return (
    <div className = "navigation">
        <Link to='/home' className = "logo-container">
            <Logo className="logo"></Logo>
        </Link>

        <div className="options">
            <Link className="option" to='/home'>Home</Link>
            <Link className="option" to='/portfolio'>Portfolio</Link>
            <Link className="option" to='/contact'>Contact</Link>
        </div>
    </div>
    )
}

export default NavigationBar;