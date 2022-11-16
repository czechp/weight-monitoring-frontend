import {FieldsValidator} from "../../../../service/validator/fieldsValidator";
import UUID_LENGTH from "../../../../constant/UUID";

function activationCodeFieldValidator(activationCode) {
    const fieldsValidator = new FieldsValidator();
    return fieldsValidator.minimumLength(activationCode, UUID_LENGTH);
}

export default activationCodeFieldValidator;