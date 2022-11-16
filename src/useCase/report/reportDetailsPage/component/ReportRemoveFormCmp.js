import React from "react";

import ContainerCmp from "../../../../component/ContainerCmp";
import ButtonCmp from "../../../../component/ButtonCmp";
import colors from "../../../../configuration/style/colors";
import ModalDialogCmp, {useModalDialog} from "../../../../component/ModalDialogCmp";
import SendRequestService from "../../../../service/http/sendRequestService";
import {StatementContext} from "../../../../App";
import {useNavigate} from "react-router-dom";
import httpErrorHandler from "../../../../service/http/httpErrorHandler";

const ReportRemoveFormCmp = ({reportId}) => {
    const modalDialogHandler = useModalDialog();
    const {showErrorInfo, showSuccessInfo} = React.useContext(StatementContext);
    const navigate = useNavigate();

    function confirmRemovingOnClick() {
        const URL = `/api/reports/${reportId}`;
        const sendRequestService = new SendRequestService();
        sendRequestService.delete(URL)
            .then((response) => {
                showSuccessInfo("Raport usunięty");
                navigate("/reports")
            })
            .catch((error) => showErrorInfo(httpErrorHandler(error)));
    }

    return <ContainerCmp>
        <ButtonCmp label="Usuń raport" color={colors.danger} onClick={modalDialogHandler.showModal}/>
        <ModalDialogCmp title="Usuwanie raportu" handler={modalDialogHandler}>
            Czy na pewno chcesz usunąć raport?
            <ButtonCmp label="Usuń" color={colors.success} onClick={confirmRemovingOnClick}/>
        </ModalDialogCmp>
    </ContainerCmp>
}

export default ReportRemoveFormCmp;