import PageCmp from "../../../component/PageCmp";
import ReportListCmp from "./component/ReportListCmp";
import GetRequestService from "../../../service/http/getRequestService";

const ReportListPage = () => {
    const URL = "/api/reports";
    const getRequestService = new GetRequestService();
    const {objects: reports, setSortingField} = getRequestService.getObjectsArray(URL);
    return <PageCmp title="Lista raportów" loaded={reports}>
        <ReportListCmp reports={reports} setSortingField={setSortingField}/>
    </PageCmp>
}

export default ReportListPage;