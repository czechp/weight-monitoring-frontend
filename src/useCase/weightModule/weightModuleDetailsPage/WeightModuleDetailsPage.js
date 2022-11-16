import PageCmp from "../../../component/PageCmp";
import {useLocation} from "react-router-dom";
import GetRequestService from "../../../service/http/getRequestService";
import WeightModuleDetailsCmp from "./component/WeightModuleDetailsCmp";
import WeightModuleDeleteCmp from "./component/WeightModuleDeleteCmp";

const WeightModuleDetailsPage = () => {
    const URL = "/api/weight-modules";
    const getRequestService = new GetRequestService();
    const {state: weightModuleId} = useLocation();
    const {object: weightModule} = getRequestService.getObject(`${URL}/${weightModuleId}`);

    return <PageCmp title="Moduł wagowy I -  szczegóły" loaded={weightModule}>
        {
            weightModule && <>
                <WeightModuleDetailsCmp weightModule={weightModule}/>
                <WeightModuleDeleteCmp weightModuleId={weightModule.id}/>
            </>
        }

    </PageCmp>
}

export default WeightModuleDetailsPage;