import PageCmp from "../../../component/PageCmp";
import GetRequestService from "../../../service/http/getRequestService";
import DosingDevicesListCmp from "./component/DosingDevicesListCmp";

const DosingDeviceListPage = () => {
    const getRequestService = new GetRequestService();
    const URL_FIRST_MODULES = "/api/dosing-devices/first";
    const {objects: dosingDevicesFirst, setSortingField: setSortingForFirst} = getRequestService.getObjectsArray(URL_FIRST_MODULES);
    const URL_LAST_MODULES = "/api/dosing-devices/last";
    const {objects: dosingDevicesLast, setSortingField: setSortingForLast} = getRequestService.getObjectsArray(URL_LAST_MODULES);


    const dataLoaded = dosingDevicesFirst && dosingDevicesLast;

    return <PageCmp title="Dysze dozujące" loaded={dataLoaded}>
                <DosingDevicesListCmp dosingDevices={dosingDevicesFirst} setSorting={setSortingForFirst} title={"Moduł I"} />
                <DosingDevicesListCmp dosingDevices={dosingDevicesLast} setSorting={setSortingForLast} title={"Moduł II"} />
    </PageCmp>
}

export default DosingDeviceListPage;