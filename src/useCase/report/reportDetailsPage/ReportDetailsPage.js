import PageCmp from "../../../component/PageCmp";
import {useLocation} from "react-router-dom";
import GetRequestService from "../../../service/http/getRequestService";
import ReportDetailsTilesCmp from "./component/ReportDetailsTilesCmp";
import ReportDosingDevicesListCmp from "./component/ReportDosingDevicesListCmp";
import ReportRemoveFormCmp from "./component/ReportRemoveFormCmp";

const ReportDetailsPage = () => {
    const {state: reportId} = useLocation();
    const URL = `/api/reports/${reportId}`;
    const getRequestService = new GetRequestService();
    const {object: report} = getRequestService.getObject(URL);

    return <PageCmp title="Szczegóły raportu" loaded={report}>
        {report && <>
            <ReportDetailsTilesCmp report={report} />
            <ReportDosingDevicesListCmp reportId={reportId} isFirst={true} />
            <ReportDosingDevicesListCmp reportId={reportId} isFirst={false}/>
            <ReportRemoveFormCmp reportId={reportId} />
        </>}
    </PageCmp>
}

export default ReportDetailsPage;