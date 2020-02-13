const isFormValid = (currentValue, formObject, type) => {
    const validators = formObject[type].validation;
    let isValid = true;
    let errorMsg = '';
    if(validators.required !== undefined){
        isValid = currentValue.trim() !== '' && isValid;
        errorMsg = !isValid ? `*Required`:'';
    }
    if (validators.match !== undefined) {
        isValid = currentValue.match(validators.match) && isValid;
        if(!isValid && type ==='email'){
            errorMsg='*Input must be a valid email';
        }
        if(!isValid && type ==='name'){
            errorMsg='*Name must be a valid text';
        }
        if(!isValid && type ==='age'){
            errorMsg='*Age must be a valid number';
        }
        if(!isValid && type ==='phone'){
            errorMsg='*Phone number must include at least six numbers'
        }
    }
    return {isValid,errorMsg};
};

export default isFormValid;