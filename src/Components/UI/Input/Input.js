import React from 'react';
import classes from './Input.module.css';
import {Radio, RadioGroup} from 'react-radio-group';

const Input = props => {
    const inputsMap = {
        'input': () => <input
            className= "form-control form-control-sm date"
            {...props.elementConfig}
            value={props.value}
            checked={props.checked}
            onChange={props.changed}
        />,
        'textarea': () =>
            <textarea
                className={classes.InputElement}
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
        'radioGroup': () => <RadioGroup name={props.name} selectedValue={props.value} onChange={props.changed}>
            {props.elementConfig.options.map(({value, displayValue}) => (
                <React.Fragment><Radio value={value}/>{displayValue}</React.Fragment>))
            }
        </RadioGroup>
    };

    const inputElement = inputsMap[props.elementType]();
    return (
        <React.Fragment>
            <div className="form-inline">
                <label className="col-form-label mx-auto text-uppercase font-weight-bold text-sm">
                    <span className="mr-2">{props.elementLabel}</span>
                    {inputElement}
                </label>
            </div>
            <div className={classes.errorMsg}>{props.errorMsg}</div>
        </React.Fragment>
    )
};


export default Input;