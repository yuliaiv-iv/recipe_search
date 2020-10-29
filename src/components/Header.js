import React from 'react';
import NavBar from './NavBar';
//import logo from '../images/cloche.svg'

function Header() {

    return (
        <div className="header">
            <div className="header__logo"></div>
            <NavBar />
        </div>
    )
}

export default Header;