import React from 'react';
import classes from './Input.module.css';
import {Radio, RadioGroup} from 'react-radio-group';

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
        </select>,
        'radioGroup': () => <RadioGroup name={props.name} selectedValue={props.value} onChange={props.changed}>
            {props.elementConfig.options.map(({value, displayValue}) => (
                <React.Fragment><Radio value={value}/>{displayValue}</React.Fragment>))
            }
        </RadioGroup>
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