import React from "react";

import ContainerCmp from "../../../../component/ContainerCmp";
import TextInputCmp from "../../../../component/TextInputCmp";
import ButtonCmp from "../../../../component/ButtonCmp";
import {FieldsValidator} from "../../../../service/validator/fieldsValidator";
import {StatementContext} from "../../../../App";
import SendRequestService from "../../../../service/http/sendRequestService";
import httpErrorHandler from "../../../../service/http/httpErrorHandler";
import {useNavigate} from "react-router-dom";

const RestorePasswordEmailFormCmp = () => {
    const {showErrorInfo, showSuccessInfo} = React.useContext(StatementContext);
    const [userEmail, setUserEmail] = React.useState("");
    const navigate = useNavigate();

    function tokenSent(response) {
        showSuccessInfo(`Token was sent for ${userEmail}`);
        navigate("/restore-password-token", {state: response.data})
    }

    function requestErrorHandler(error) {
        showErrorInfo(httpErrorHandler(error));
    }

    function sendRestoreTokenRequest() {
        const PASSWORD_RESTORE_ENDPOINT = "/api/accounts/password-restore/token";
        const sendRequestService = new SendRequestService();
        sendRequestService.get(PASSWORD_RESTORE_ENDPOINT, [{email: userEmail}])
            .then(tokenSent)
            .catch(requestErrorHandler)
    }

    function sendRestoreTokenBtnOnClick() {
        const fieldsValidator = new FieldsValidator();
        const emailValidated = fieldsValidator.emailFormat(userEmail);
        if (emailValidated)
            sendRestoreTokenRequest();
        else
            showErrorInfo("Check correctness of email field");
    }

    return <ContainerCmp>
        <TextInputCmp label="Email:" value={userEmail} onChange={setUserEmail} placeholder="Type your email"/>
        <ButtonCmp label="Send restore token" onClick={sendRestoreTokenBtnOnClick}/>
    </ContainerCmp>
}

export default RestorePasswordEmailFormCmp;