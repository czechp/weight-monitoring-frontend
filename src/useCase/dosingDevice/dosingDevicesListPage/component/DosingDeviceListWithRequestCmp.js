import ContainerCmp from "../../../../component/ContainerCmp";
import GetRequestService from "../../../../service/http/getRequestService";
import DosingDevicesListCmp from "./DosingDevicesListCmp";

const DosingDeviceListWithRequestCmp = ({moduleId, firstModule = true}) => {
    const URL = `/api/dosing-devices/module-${firstModule ? "first" : "last"}/${moduleId}`;
    const getRequestService = new GetRequestService();
    const {objects: dosingDevices, setSortingField} = getRequestService.getObjectsArray(URL);

    return <ContainerCmp>
        <DosingDevicesListCmp title={`Moduł ${firstModule ? "I": "II"}`} dosingDevices={dosingDevices} setSorting={setSortingField} />
    </ContainerCmp>
}

export default DosingDeviceListWithRequestCmp;