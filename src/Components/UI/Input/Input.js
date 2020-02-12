import React from 'react';
import classes from './Input.module.css';

const Input = props => {
    const inputsMap = {
        'input': () => <input
            className={classes.InputElement}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
        />,
        'textarea': () =>
            <textarea
                className={classes.InputElement}
                {...props.elementConfig}
                      value={props.value}
                      onChange={props.changed}
            />,
        'select': () => <select className={classes.InputElement} value={props.value} onChange={props.changed}>
            {
                props.elementConfig.options.map(({value}) => (
                    <option key={value} value={value}>{value}</option>
                ))
            }
        </select>

    };
    const inputElement = inputsMap[props.elementType]();
    return (
        <div classes={classes.Input}>
            <label className={classes.Label}>
                {props.elementLabel}
                {inputElement}
            </label>
            <div className={classes.errorMsg}>{props.errorMsg}</div>
        </div>
    )
};


export default Input;