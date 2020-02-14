import React from 'react';
import classes from "./Navbar.module.css";

const Navbar = props => {
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
            <span className={classes.Logo}>
            Student Management System
            </span>
                <ul className="navbar-nav right">
                    <li className="nav-item">
                        <a className="nav-link" href="#applications">Applications </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#submitApplication">Submit an application</a>
                    </li>

                </ul>
            </div>
        </nav>
    )
};
export default Navbar;