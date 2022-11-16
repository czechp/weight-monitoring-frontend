import React from "react";
import styled from "styled-components";

import ContainerCmp from "../../../../component/ContainerCmp";
import ButtonCmp from "../../../../component/ButtonCmp";
import colors from "../../../../configuration/style/colors";
import {StatementContext} from "../../../../App";
import SendRequestService from "../../../../service/http/sendRequestService";
import httpErrorHandler from "../../../../service/http/httpErrorHandler";

const AccountAdminActivationCmp = ({accountId, reloadAccount}) => {
    const ACTIVATION_ENDPOINT = "/api/accounts/admin-activation";
    const sendRequestService = new SendRequestService();
    const {showSuccessInfo, showErrorInfo} = React.useContext(StatementContext);

    function activationBtnOnClick() {
        sendActivationRequest(true);
    }

    function deactivationBtnOnClick() {
        sendActivationRequest(false);
    }

    function activationUpdated(activate) {
        reloadAccount();
        showSuccessInfo(`Konto ${activate ? "aktywowane" : "dezatykwowane"}`);
    }

    function sendActivationRequest(activate) {
        const params = [{activation: activate}];
        sendRequestService.patch(`${ACTIVATION_ENDPOINT}/${accountId}`, {}, params)
            .then((response) => activationUpdated(activate))
            .catch((error) => showErrorInfo(httpErrorHandler(error)));
    }

    return <ContainerCmp title="Aktywacja administratora">
        <Container>
            <ButtonCmp label="Aktywuj" style={{width: "45%"}} color={colors.success} onClick={activationBtnOnClick}/>
            <ButtonCmp label="Dezaktywuj" style={{width: "45%"}} color={colors.danger}
                       onClick={deactivationBtnOnClick}/>
        </Container>
    </ContainerCmp>
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default AccountAdminActivationCmp;