import React, {useState} from 'react';
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import isFormValid from "../../utils/formValidation";
const FormBuilder = props => {
    const [formIsValid, setFormIsValid] = useState(false);
    const [inputForm, setInputForm] = useState({
        name: {
            elementType: 'input',
            elementLabel: 'Name',
            elementConfig: {
                type: 'text',
                placeholder: 'Enter Your Name...',

            },
            errorMsg:'',
            value: '',
            validation: {
                required: true,
                match: /^[a-zA-Z ]*$/
            },
            valid: false,
            touched: false
        },
        email: {
            elementType: 'input',
            elementLabel: 'Email',
            elementConfig: {
                type: 'text',
                placeholder: 'Enter your email...'
            },
            value: '',
            errorMsg:'',
            validation: {
                required: true,
                match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            },
            valid: false,
            touched: false
        },
        age: {
            elementType: 'input',
            elementLabel: 'Age',
            elementConfig: {
                type: 'number',
                placeholder: 'Enter Your Age...'
            },
            value: '',
            errorMsg:'',
            validation: {
                required: true,
                match: /^[0-9]*$/
            },
            valid: false,
            touched: false
        },
        phone: {
            elementType: 'input',
            elementLabel: 'Phone Number',
            elementConfig: {
                type: 'text',
                placeholder: 'Enter Your Phone...'
            },
            value: '',
            errorMsg:'',
            validation: {
                required: true,
                match: /^[+]*[0-9]{6,}$/

            },
            valid: false,
            touched: false
        },
        communicationEmail: {
            elementType: 'input',
            elementLabel: 'Email',
            elementConfig: {
                type: 'radio',
                name: 'communication',
                checked: true
            },
            value: 'email',
            validation: {
                required: true
            },
            valid: true,
            touched: false
        },
        communicationPhone: {
            elementType: 'input',
            elementLabel: 'Phone',
            elementConfig: {
                type: 'radio',
                name: 'communication',
            },
            value: 'phone',
            validation: {
                required: true
            },
            valid: true,
            touched: false
        },
        englishLvl: {
            elementType: 'select',
            elementLabel: 'English Level',
            elementConfig: {
                options: [
                    {value: 'A1'},
                    {value: 'A2'},
                    {value: 'B1'},
                    {value: 'B2'},
                    {value: 'C1'},
                    {value: 'C2'},
                ],
            },
            value: 'A1',
            validation: {},
            valid: true
        },
        available: {
            elementType: 'input',
            elementLabel: 'Available to Start',
            elementConfig: {
                type: 'date'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        skills: {
            elementType: 'textarea',
            elementLabel: 'Technical Skills and Courses',
            elementConfig: {
                rows: '5',
                cols: '15',
                placeholder: 'Enter technical skills and courses...'
            },
            value: '',
            validation: {},
            valid: true,
            touched: false
        },
        shortPresent:
            {
                elementType: 'textarea',
                elementLabel: 'Short Personal Presentation',
                elementConfig: {
                    rows: '5',
                    cols: '15',
                    placeholder: 'Enter a short Personal Presentation (e.g. reason for joining the program)...'
                },
                value: '',
                validation: {},
                valid: true,
                touched: false
            },
        homeStudy: {
            elementType: 'input',
            elementLabel: 'Study from home?',
            elementConfig: {
                type: 'checkbox'
            },
            validation: {},
            valid: true,
            touched: false,

        }
    });

    const formSubmitHandler = () => {

    };
    const inputChangedHandler = (type, ev) => {
        const {isValid, errorMsg} = isFormValid(ev.target.value, inputForm, type);
        const form = {
            ...inputForm,
            [type]: {
                ...inputForm[type],
                value: ev.target.value,
                touched: true,
                valid: isValid,
                errorMsg
            }
        };
        setInputForm(form);
        let isValidForm = Object.keys(form).every((key) => form[key].valid);
        setFormIsValid(isValidForm);
    };
    const formElements = [];
    for (let key in inputForm) {
        formElements.push({
            id: key,
            config: inputForm[key]
        })
    }
    let form = <form onSubmit={formSubmitHandler}>
        {formElements.map(({id, config}) => (<Input
            key={id}
            value={config.value}
            elementConfig={config.elementConfig}
            elementType={config.elementType}
            elementLabel={config.elementLabel}
            errorMsg={config.errorMsg}
            changed={inputChangedHandler.bind(undefined, id)}
        />))}
        <Button  disabled={!formIsValid}>Submit Application</Button>
    </form>;
    return (
        <React.Fragment>
            <div>Hello</div>
            {form}
        </React.Fragment>

    )
};

export default FormBuilder;