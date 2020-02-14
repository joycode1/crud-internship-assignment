import React from 'react';
import classes from "./Navbar.module.css";


const Navbar = props => {
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <span className={classes.Logo}>
            Student Management System
            </span>
        </nav>
    )
};
export default Navbar;