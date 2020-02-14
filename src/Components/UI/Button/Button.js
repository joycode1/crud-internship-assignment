import React from 'react'
import classes from './Button.module.css'

const Button = props => {

    return (
        <button className={props.btnClass || "btn btn-primary btn-lg btn-block"} disabled={props.disabled} onClick={props.clicked}>{props.children}</button>
    )
};

export default Button;