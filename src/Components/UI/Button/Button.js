import React from 'react'
const Button = props => {

    return (
        <button className={props.btnClass || "btn btn-primary  btn-block"} disabled={props.disabled} onClick={props.clicked}>{props.children}</button>
    )
};

export default Button;