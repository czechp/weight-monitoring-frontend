import React from "react";
import styled from "styled-components";

import ContainerCmp from "../../../../component/ContainerCmp";
import ButtonCmp from "../../../../component/ButtonCmp";
import colors from "../../../../configuration/style/colors";
import ModalDialogCmp, {useModalDialog} from "../../../../component/ModalDialogCmp";
import SendRequestService from "../../../../service/http/sendRequestService";
import {StatementContext} from "../../../../App";
import httpErrorHandler from "../../../../service/http/httpErrorHandler";
import {useNavigate} from "react-router-dom";

const WeightModuleDeleteCmp = ({weightModuleId, firstModule=true}) => {
    const modalHandler = useModalDialog();
    const {showSuccessInfo, showErrorInfo} = React.useContext(StatementContext);
    const navigate = useNavigate();


    function removeButtonConfirmOnClick() {
        const URL = firstModule ? `/api/weight-modules/${weightModuleId}` : `/api/weight-modules-last/${weightModuleId}`;
        const sendRequestService = new SendRequestService();
        sendRequestService.delete(URL)
            .then(weightModuleRemoved)
            .catch((error) => showErrorInfo(httpErrorHandler(error)));
    }

    function weightModuleRemoved(httpResponse) {
        showSuccessInfo("Moduł wagowy został usunięty");
        navigate("/weight-modules");
    }

    return <ContainerCmp>
        <ButtonCmp label="Usuń moduł wagowy" color={colors.danger} onClick={modalHandler.showModal}/>
        <ModalDialogCmp handler={modalHandler} title={"Usuwanie modułu wagowego"}>
            <Text>Czy na pewno chcesz usunąć moduł wagowy?</Text>
            <ButtonCmp label={"Usuń"} color={colors.success} onClick={removeButtonConfirmOnClick}/>
        </ModalDialogCmp>
    </ContainerCmp>
};

export default WeightModuleDeleteCmp;

const Text = styled.p``;


