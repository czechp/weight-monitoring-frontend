import {FieldsValidator} from "../../../../service/validator/fieldsValidator";

const fieldsValidator = new FieldsValidator();

function registerPageValidator(fields) {
    const validators = [];
    if (!lengthValidation(fields)) validators.push("Check length of the fields");
    if (!emailValidation(fields)) validators.push("Incorrect email address");
    if (!passwordEqualityValidation(fields)) validators.push("Passwords are not equal");

    return validators;
}

function lengthValidation(formFields) {
    const MIN_FIELD_LENGTH = 3;

    const lengthValidated = [formFields.username, formFields.email, formFields.passwordConfirm, formFields.password]
        .every((f) => fieldsValidator.minimumLength(f, MIN_FIELD_LENGTH));
    return lengthValidated;
}


function emailValidation(formFields) {
    const emailValidated = fieldsValidator.emailFormat(formFields.email);
    return emailValidated;
}

function passwordEqualityValidation(formFields) {
    const passwordsEqual = formFields.password === formFields.passwordConfirm;
    return passwordsEqual;
}

export default registerPageValidator;