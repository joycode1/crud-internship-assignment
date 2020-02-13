import React from 'react';
import classes from "./Navbar.module.css";


const Navbar = props =>{

    return (
        <header className={classes.Navbar}>
            <div className={classes.Logo}>Student Application System</div>
            <nav>
                <ul className={classes.Container}>
                    
                    <li> <a href="#">View all Applications</a></li>
                    <li><a href="#">Register an Application</a></li>
                </ul>
            </nav>
        </header>
    )
};
export default Navbar;