import React from "react";

import ContainerCmp from "../../../../component/ContainerCmp";
import TextInputCmp from "../../../../component/TextInputCmp";
import ButtonCmp from "../../../../component/ButtonCmp";
import colors from "../../../../configuration/style/colors";
import {StatementContext} from "../../../../App";
import SendRequestService from "../../../../service/http/sendRequestService";
import httpErrorHandler from "../../../../service/http/httpErrorHandler";
import {useNavigate} from "react-router-dom";

const RestorePasswordApplyTokenCmp = ({defaultToken}) => {
    const {showErrorInfo, showSuccessInfo} = React.useContext(StatementContext);
    const navigate = useNavigate();
    const [token, setToken] = React.useState(defaultToken);
    const [newPassword, setNewPassword] = React.useState("");
    const [newPasswordConfirm, setNewPasswordConfirm] = React.useState("");

    function validatePasswords() {
        if (newPassword === newPasswordConfirm)
            return true;
        else {
            showErrorInfo("Passwords do not match")
            return false;
        }
    }

    function sendNewPasswordRequest() {
        const NEW_PASSWORD_ENDPOINT = "/api/accounts/password-restore/new-password";
        const sendRequestService = new SendRequestService();
        const requestParams = [
            {token: token},
            {password: newPassword}
        ];

        sendRequestService.patch(NEW_PASSWORD_ENDPOINT, {}, requestParams)
            .then(newPasswordSet)
            .catch(handleRequestError);

    }

    function newPasswordSet() {
        showSuccessInfo("New password was set. You can login now.");
        navigate("/login");
    }

    function handleRequestError(error) {
        showErrorInfo(httpErrorHandler(error));
    }

    function createNewPwdBtnOnClick() {
        if (validatePasswords())
            sendNewPasswordRequest();
    }

    return <ContainerCmp>
        <TextInputCmp label="Restore token:" value={token} onChange={setToken}
                      placeholder="Paste token from email message"/>
        <TextInputCmp label="New password:" value={newPassword} onChange={setNewPassword} type="password"
                      placeholder="Type your new password" minLength={3}/>
        <TextInputCmp label="Confirm new password:" value={newPasswordConfirm} onChange={setNewPasswordConfirm}
                      type="password"
                      placeholder="Confirm your new password" minLength={3}/>
        <ButtonCmp label="Create new password" color={colors.success} onClick={createNewPwdBtnOnClick}/>
    </ContainerCmp>
}

export default RestorePasswordApplyTokenCmp;