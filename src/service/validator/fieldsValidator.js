import emailValidator from "email-validator";

export function FieldsValidator() {
    this.minimumLength = (text, length) => text.length >= length;
    this.emailFormat = (email) => emailValidator.validate(email);
}