import PageCmp from "../../../component/PageCmp";
import GetRequestService from "../../../service/http/getRequestService";
import WeightModuleListCmp from "./component/WeightModuleListCmp";
import WeightModuleCreateCmp from "./component/WeightModuleCreateCmp";

const WeightModuleListPage = () => {
    const FIRST_MODULES_URL = "/api/weight-modules";
    const LAST_MODULES_URL = "/api/weight-modules-last";
    const getRequestService = new GetRequestService();
    const {
        objects: weightModules,
        setSortingField,
        reloadRequest
    } = getRequestService.getObjectsArray(FIRST_MODULES_URL);
    const {
        objects: weightModulesLast,
        setSortingField:setSortingFieldLast,
        reloadRequest:reloadRequestLast
    } = getRequestService.getObjectsArray(LAST_MODULES_URL);

    return <PageCmp title="Lista modułów wagowych" loaded={weightModules}>
        {
            weightModules && <>
                <WeightModuleCreateCmp reloadData={reloadRequest}/>
                <WeightModuleListCmp weightModules={weightModules} setSortingField={setSortingField}/>
            </>
        }
        {
            weightModulesLast && <>
                <WeightModuleCreateCmp reloadData={reloadRequestLast} firstModule={false}/>
                <WeightModuleListCmp weightModules={weightModulesLast} setSortingField={setSortingFieldLast}
                                     firstModule={false}/>
            </>
        }
    </PageCmp>
}

export default WeightModuleListPage;