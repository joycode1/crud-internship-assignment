import React from 'react';
import classes from './Input.module.css';
import {Radio, RadioGroup} from 'react-radio-group';

const Input = props => {
    const isValid = !props.touched && !props.valid ? null : props.touched && !props.valid ? "is-invalid":"is-valid";
    const inputsMap = {
        'input': () => <input
            className= {`form-control form-control-sm date ${isValid}`}
            {...props.elementConfig}
            value={props.value}
            checked={props.checked}
            onChange={props.changed}
        />,
        'textarea': () =>
            <textarea
                className=" form-control"
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />,
        'select': () => <select className="form-control mb-4" value={props.value} onChange={props.changed}>
            {
                props.elementConfig.options.map(({value}) => (
                    <option key={value} value={value}>{value}</option>
                ))
            }
        </select>,
        'radioGroup': () => <RadioGroup name={props.name} className="form-check form-check-inline" selectedValue={props.value} onChange={props.changed}>
            {props.elementConfig.options.map(({value, displayValue}) => (
                <React.Fragment key={value}><Radio  value={value}/>{displayValue}</React.Fragment>))
            }
        </RadioGroup>
    };

    const inputElement = inputsMap[props.elementType]();
    const required = props.required && !props.valid ? <span className={classes.errorMsg}>*Required</span>: null;
    return (
        <React.Fragment>
            <div className="form-inline">
                <label className="col-form-label mx-auto">
                    <span className="mr-2 font-weight-bold text-uppercase">{props.elementLabel}</span>
                    {inputElement}{required}
                </label>
            </div>
            <div className={classes.errorMsg}>{props.errorMsg}</div>
        </React.Fragment>
    )
};


export default Input;