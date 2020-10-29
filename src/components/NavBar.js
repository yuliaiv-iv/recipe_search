import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar">
            <NavLink
                exact to="/"
                activeClassName="navbar__link_active"
                className="navbar__link"
            >
                Home
            </NavLink>
            <NavLink
                to="/recipe"
                activeClassName="navbar__link_active"
                className="navbar__link"
            >
                Recipes
            </NavLink>
        </nav>
    )
}

export default NavBar;