import React from "react";

import ModalDialogCmp, {useModalDialog} from "../../../../component/ModalDialogCmp";
import ContainerCmp from "../../../../component/ContainerCmp";
import AuthorizationService from "../../../../service/authorization/authorizationService";
import ButtonCmp from "../../../../component/ButtonCmp";
import colors from "../../../../configuration/style/colors";
import SendRequestService from "../../../../service/http/sendRequestService";
import {StatementContext} from "../../../../App";
import {useNavigate} from "react-router-dom";
import httpErrorHandler from "../../../../service/http/httpErrorHandler";

const ProductionLineDeleteCmp = ({productionLine}) => {
    const modalHandler = useModalDialog();
    const {showSuccessInfo, showErrorInfo} = React.useContext(StatementContext);
    const navigate = useNavigate();
    const authorizationService = new AuthorizationService();

    function deleteSuccess() {
        showSuccessInfo(`Linia ${productionLine.lineName} usunięta`);
        navigate("/production-lines");
    }

    function sendDeleteRequest() {
        const URL = `/api/production-lines/${productionLine.id}`;
        const sendRequestService = new SendRequestService();
        sendRequestService.delete(URL)
            .then(deleteSuccess)
            .catch((error) => showErrorInfo(httpErrorHandler(error)));

    }

    return <>
        {authorizationService.isAdmin() && <ContainerCmp>
            <ButtonCmp color={colors.danger} label={`Usuń linie -${productionLine.lineName}`}
                       onClick={modalHandler.showModal}/>
            <ModalDialogCmp handler={modalHandler} title="Potwierdzenie usunięcia">
                <p> Czy na pewno chcesz usunąć linie {`${productionLine.lineName}`}?</p>
                <ButtonCmp label="Usuń" color={colors.success} onClick={sendDeleteRequest}/>
            </ModalDialogCmp>
        </ContainerCmp>}
    </>
}

export default ProductionLineDeleteCmp;