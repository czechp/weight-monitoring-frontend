import {useLocation} from "react-router-dom";


import PageCmp from "../../../component/PageCmp";
import GetRequestService from "../../../service/http/getRequestService";
import ProductionLineDetailsInfoCmp from "./component/ProductionLineDetailsInfoCmp";
import ProductionLineDeleteCmp from "./component/ProductionLineDeleteCmp";
import ProductionLineWeightModuleList from "./component/ProductionLineWeightModuleList";

const ProductionLineDetailsPage = () => {
    const PRODUCTION_LINE_URI = "/api/production-lines";
    const {state: productionLineId} = useLocation();
    const getRequestService = new GetRequestService();

    const {object: productionLine} = getRequestService.getObject(`${PRODUCTION_LINE_URI}/${productionLineId}`);
    const pageTitle = `Linia - ${productionLine?.lineName || "Nie znaleziono"}`;

    return <PageCmp title={pageTitle}>
        {
            productionLine && <>
                <ProductionLineDeleteCmp productionLine={productionLine}/>
                <ProductionLineDetailsInfoCmp productionLine={productionLine}/>
                <ProductionLineWeightModuleList productionLineId={productionLine.id}/>
                <ProductionLineWeightModuleList productionLineId={productionLine.id} firstModule={false}/>
            </>
        }
    </PageCmp>
}

export default ProductionLineDetailsPage;