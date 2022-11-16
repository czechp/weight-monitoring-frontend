import React from "react";

import ContainerCmp from "../../../../component/ContainerCmp";
import ButtonCmp from "../../../../component/ButtonCmp";
import colors from "../../../../configuration/style/colors";
import ModalDialogCmp, {useModalDialog} from "../../../../component/ModalDialogCmp";
import SendRequestService from "../../../../service/http/sendRequestService";
import {StatementContext} from "../../../../App";
import httpErrorHandler from "../../../../service/http/httpErrorHandler";
import {useNavigate} from "react-router-dom";

const AccountDeleteCmp = ({accountId}) => {
    const REMOVE_ENDPOINT = "/api/accounts";
    const sendRequestService = new SendRequestService();
    const {showSuccessInfo, showErrorInfo} = React.useContext(StatementContext);
    const navigate = useNavigate();
    const modalHandler = useModalDialog();

    function deleteBtnOnClick() {
        modalHandler.showModal();
    }

    function confirmRemovingBtnOnClick() {
        sendRequestService.delete(`${REMOVE_ENDPOINT}/${accountId}`,)
            .then((response) => accountRemoved())
            .catch((error) => showErrorInfo(httpErrorHandler(error)));
    }

    function accountRemoved() {
        showSuccessInfo("Account removed");
        navigate("/accounts")
    }

    return <ContainerCmp title="Usuń konto">
        <ButtonCmp label="Usuń" color={colors.danger} onClick={deleteBtnOnClick}/>
        <ModalDialogCmp title="Do you want to remove this account?" handler={modalHandler}>
            <ContainerCmp>
                <ButtonCmp label="Usuń" onClick={confirmRemovingBtnOnClick} color={colors.success}/>
            </ContainerCmp>
        </ModalDialogCmp>
    </ContainerCmp>
}

export default AccountDeleteCmp;