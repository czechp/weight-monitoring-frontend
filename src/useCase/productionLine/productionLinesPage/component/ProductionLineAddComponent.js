import React from "react";

import ContainerCmp from "../../../../component/ContainerCmp";
import ButtonCmp from "../../../../component/ButtonCmp";
import ModalDialogCmp, {useModalDialog} from "../../../../component/ModalDialogCmp";
import AuthorizationService from "../../../../service/authorization/authorizationService";
import TextInputCmp from "../../../../component/TextInputCmp";
import colors from "../../../../configuration/style/colors";
import {StatementContext} from "../../../../App";
import SendRequestService from "../../../../service/http/sendRequestService";
import httpErrorHandler from "../../../../service/http/httpErrorHandler";

const ProductionLineAddComponent = ({
                                        reload = () => {
                                        }
                                    }) => {
    const inputConstraints = {
        newLineNameMinLength: 3
    }

    const modalHandler = useModalDialog();
    const [newLineName, setNewLineName] = React.useState("");
    const authorizationService = new AuthorizationService();
    const {showSuccessInfo, showErrorInfo} = React.useContext(StatementContext);

    function inputsValidated() {
        return newLineName.length >= inputConstraints.newLineNameMinLength;
    }

    function lineAdded() {
        showSuccessInfo(`Dodano nową linie: ${newLineName}`);
        modalHandler.hideModal();
        reload();
    }

    function sendAddRequest() {
        const ADD_LINE_ENDPOINT = "/api/production-lines";
        const sendRequestService = new SendRequestService();
        const requestBody = {lineName: newLineName};
        sendRequestService.post(ADD_LINE_ENDPOINT, requestBody)
            .then(lineAdded)
            .catch((error) => showErrorInfo(httpErrorHandler(error)));
    }

    function addButtonOnClick() {
        if (inputsValidated())
            sendAddRequest();
        else
            showErrorInfo("Sprawdź poprawność danych");

    }

    return <>
        {
            authorizationService.isAdmin() &&
            <ContainerCmp>
                <ButtonCmp label="Dodaj linie" onClick={modalHandler.showModal}/>
                <ModalDialogCmp title="Dodaj nowa linie" handler={modalHandler}>
                    <TextInputCmp
                        label="Nazwa lini:"
                        minLength={3}
                        onChange={setNewLineName}
                        value={newLineName}
                        placeholder="Wpisz nazwę linii"
                    />
                    <ButtonCmp label="Dodaj" onClick={addButtonOnClick} color={colors.success}/>
                </ModalDialogCmp>
            </ContainerCmp>
        }
    </>
}

export default ProductionLineAddComponent;