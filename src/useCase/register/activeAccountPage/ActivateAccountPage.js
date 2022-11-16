import React from "react";
import {useLocation, useNavigate} from "react-router-dom";

import PageCmp from "../../../component/PageCmp";
import ContainerCmp from "../../../component/ContainerCmp";
import TextInputCmp from "../../../component/TextInputCmp";
import ButtonCmp from "../../../component/ButtonCmp";
import activationCodeFieldValidator from "./validator/activationCodeFieldValidator";
import {StatementContext} from "../../../App";
import UUID_LENGTH from "../../../constant/UUID";
import SendRequestService from "../../../service/http/sendRequestService";
import httpErrorHandler from "../../../service/http/httpErrorHandler";

const ActivateAccountPage = () => {
    const {state: activationCode} = useLocation();


    return <PageCmp title="Aktywacja konta">
        <ActivationForm activationCode={activationCode}/>
    </PageCmp>
}


const ActivationForm = ({activationCode: myActivationCode}) => {
    const ACTIVATION_ENDPOINT = "/api/accounts/email-confirmation";
    const [activationCode, setActivationCode] = React.useState(myActivationCode || "");
    const navigate = useNavigate();

    const {showErrorInfo, showSuccessInfo} = React.useContext(StatementContext);

    function activationSuccess() {
        showSuccessInfo("Konto zostało aktywowane. Czekaj na aktywacje administratora");
        navigate("/login");
    }

    function sendActivationRequest() {
        const sendRequestService = new SendRequestService();
        sendRequestService.patch(ACTIVATION_ENDPOINT, {}, [{token: activationCode}])
            .then((response) => activationSuccess())
            .catch((error) => showErrorInfo(httpErrorHandler(error)));
    }

    function activationBtnOnClick() {
        if (activationCodeFieldValidator(activationCode))
            sendActivationRequest();
        else
            showErrorInfo("Kod aktywacyjny musi mieć 36 znaków")
    }

    return <ContainerCmp>
        <TextInputCmp label="Kod aktywacyjny:"
                      value={activationCode}
                      onChange={setActivationCode}
                      placeholder="Wpisz kod aktywacyjny z wiadomości email"
                      minLength={UUID_LENGTH}
        />
        <ButtonCmp label="Aktywuj konto" onClick={activationBtnOnClick}/>
    </ContainerCmp>
}


export default ActivateAccountPage;