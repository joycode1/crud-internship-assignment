import React from 'react';
import classes from './Layout.module.css';
import Navbar from "../UI/Navbar/Navbar";

const Layout = props => {

    return (
        <div className={classes.MainWrapper}>
            <Navbar/>
            <main style={{margin:'4rem'}}>{props.children}</main>
        </div>
    );

};
export default Layout;