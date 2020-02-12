import React from 'react';


const Input = props => {
    const inputsMap = {
        'input': () => <input
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
        />,
        'textarea': () =>
            <textarea {...props.elementConfig}
                      value={props.value}
                      onChange={props.changed}
            />,
        'select': () => <select value={props.value} onChange={props.changed}>
            {
                props.elementConfig.options.map(({value}) => (
                    <option key={value} value={value}>{value}</option>
                ))
            }
        </select>


    };
    const inputElement = inputsMap[props.elementType]();
    return (
        <div>
            <label>
                {props.elementLabel}
                {inputElement}
            </label>

        </div>
    )
};


export default Input;