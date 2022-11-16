import React from "react";
import styled from "styled-components";

import ModalDialogCmp, {useModalDialog} from "../../../../component/ModalDialogCmp";
import AuthorizationService from "../../../../service/authorization/authorizationService";
import ButtonCmp from "../../../../component/ButtonCmp";
import SelectInputCmp from "../../../../component/SelectInputCmp";
import GetRequestService from "../../../../service/http/getRequestService";
import colors from "../../../../configuration/style/colors";
import SendRequestService from "../../../../service/http/sendRequestService";
import {StatementContext} from "../../../../App";
import httpErrorHandler from "../../../../service/http/httpErrorHandler";
import TextInputCmp from "../../../../component/TextInputCmp";

const WeightModuleCreateCmp = ({
                                   firstModule = true,
                                   reloadData = () => {
                                   }
                               }) => {
    const modalHandler = useModalDialog();
    const authorizationService = new AuthorizationService();
    const sendRequestService = new SendRequestService();
    const {showSuccessInfo, showErrorInfo} = React.useContext(StatementContext);
    const lines = useProvideLineList();
    const [selectedLineId, setSelectedLineId] = React.useState(0);
    const [dosingDevicesAmount, setDosingDevicesAmount] = React.useState(0);

    const sendCreateRequest = () => {
        const URL = firstModule ? "/api/weight-modules" : "/api/weight-modules-last";
        sendRequestService.post(URL, {productionLineId: selectedLineId, dosingDevicesAmount})
            .then(weightModuleCreated)
            .catch((error) => showErrorInfo(httpErrorHandler(error)));
    }

    const weightModuleCreated = (response) => {
        showSuccessInfo("Moduł wagowy został stworzony");
        reloadData();
        modalHandler.hideModal();
    };


    return <Container>
        {authorizationService.isAdmin() && <>
            <ButtonCmp label={`Dodaj nowy moduł wagowy ${firstModule ? "I" : "II"}`}
                       onClick={() => modalHandler.showModal()}/> <ModalDialogCmp title="Dodaj nowy moduł wagowy"
                                                                                  handler={modalHandler}></ModalDialogCmp>
            <ModalDialogCmp title={`Dodaj nowy moduł wagowy ${firstModule ? "I" : "II"}`} handler={modalHandler}>
                <SelectInputCmp label="Wybierz linie:" value={selectedLineId} setValue={setSelectedLineId}
                                options={lines}/>
                <TextInputCmp value={dosingDevicesAmount}
                              onChange={setDosingDevicesAmount} type={"number"}
                              label="Ilość dyszy dozujących: "
                              placeholder={"Wpisz ilość dyszy dozujących"}/>
                <ButtonCmp label={`Dodaj nowy moduł wagowy ${firstModule ? "I" : "II"}`} color={colors.success}
                           onClick={sendCreateRequest}/>
            </ModalDialogCmp>
        </>
        }</Container>

}

const useProvideLineList = () => {
    const URL = "/api/production-lines";
    const getRequestService = new GetRequestService();
    const {objects: lines} = getRequestService.getObjectsArray(URL);
    const [linesList, setLinesList] = React.useState([]);

    React.useEffect(() => {
        if (lines) {
            const preparedLines = lines.map((line) => {
                return {value: line.id, label: line.lineName}
            });
            setLinesList(preparedLines);
        }
    }, [lines]);


    return linesList;
}

export default WeightModuleCreateCmp;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;