import { validateProps } from "./typings/interfaces";

export const validate = (values: validateProps) => {
    const errors: any = {};
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email format';
    }

    if (!values.password) {
        errors.password = 'Required';
    }

    if(values.signUpActive) {
        if(!values.passwordValidation) {
            errors.passwordValidation = 'Required'
        } else if(values.password !== values.passwordValidation) {
            errors.passwordValidation = 'Passwords do not match'
        }
    }
    
    return errors;
};