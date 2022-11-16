import React from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

import PageCmp from "../../../component/PageCmp";
import ContainerCmp from "../../../component/ContainerCmp";
import TextInputCmp from "../../../component/TextInputCmp";
import ButtonCmp from "../../../component/ButtonCmp";
import {StatementContext} from "../../../App";
import {FieldsValidator} from "../../../service/validator/fieldsValidator";
import SendRequestService from "../../../service/http/sendRequestService";
import AuthorizationService from "../../../service/authorization/authorizationService";
import httpErrorHandler from "../../../service/http/httpErrorHandler";

const LoginPage = () => {
    const MINIMUM_FIELDS_LENGTH = 3;
    const LOGIN_ENDPOINT = "/api/accounts/login";

    const fieldsValidator = new FieldsValidator();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const {showErrorInfo, showSuccessInfo} = React.useContext(StatementContext);
    const navigate = useNavigate();


    function validateFields() {
        return [username, password].every(f => fieldsValidator.minimumLength(f, MINIMUM_FIELDS_LENGTH));
    }

    function loginSuccessfully(response) {
        const authorizationService = new AuthorizationService();
        showSuccessInfo("Użytkownik zalogowany");
        authorizationService.storeUserInfo({...response.data, password});
        navigate("/")
    }

    function sendAuthorizeRequest() {
        const sendRequestService = new SendRequestService();
        sendRequestService.post(LOGIN_ENDPOINT, {username, password})
            .then((response) => loginSuccessfully(response))
            .catch((error) => showErrorInfo(httpErrorHandler(error)));
    }

    function loginBtnOnClick() {
        if (validateFields())
            sendAuthorizeRequest();
        else showErrorInfo("Sprawdź poprawność danych");
    }

    function registerBtnOnClick() {
        navigate("/register");
    }

    function activateAccountBtnClick() {
        navigate("/activate-account");
    }

    React.useEffect(() => {
        const authorizationService = new AuthorizationService();
        if (authorizationService.isLogged()) {
            navigate("/");
        }
    }, [navigate]);

    return <PageCmp title="Login">
        <ContainerCmp>
            <TextInputCmp placeholder="Wpisz login" label="Login:" value={username} onChange={setUsername}
                          minLength={3}/>
            <TextInputCmp type="password" placeholder="Wpisz hasło" label="Hasło:" value={password}
                          onChange={setPassword} minLength={3}/>
            <ButtonCmp label="Logowanie" onClick={loginBtnOnClick}/>
            <RestorePasswordInfo>Jeżeli nie pamiętasz hasła. <RestorePasswordLink href="/restore-password-demand">Odzyskiwanie
                hasła</RestorePasswordLink></RestorePasswordInfo>
            <ButtonCmp label="Rejestracja" onClick={registerBtnOnClick}/>
            <ButtonCmp label="Aktywowanie konta" onClick={activateAccountBtnClick}/>
        </ContainerCmp>
    </PageCmp>
}

const RestorePasswordInfo = styled.p`
  margin-top: 0;
  font-size: smaller;
  font-style: italic;
`;

const RestorePasswordLink = styled.a``;

export default LoginPage;