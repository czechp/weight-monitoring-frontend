import GetRequestService from "../../../../service/http/getRequestService";
import ContainerCmp from "../../../../component/ContainerCmp";
import WeightModuleDetailsCmp from "../../../weightModule/weightModuleDetailsPage/component/WeightModuleDetailsCmp";

const ProductionLineWeightModuleList = ({productionLineId, firstModule=true}) => {
    const URL = firstModule ? `/api/weight-modules/production-line/${productionLineId}` : `/api/weight-modules-last/production-line/${productionLineId}`;
    const getRequestService = new GetRequestService();
    const {objects: weightModules} = getRequestService.getObjectsArray(URL);


    return <ContainerCmp title={`Moduł ${firstModule ? "I": "II"}`}>
        {weightModules && <>
            {weightModules.map((module, index) => <WeightModuleDetailsCmp firstModule={firstModule} key={`${module.id}-${index}-${Math.random()}`}
                                                                          weightModule={module}/>)}
        </>}
    </ContainerCmp>
}

export default ProductionLineWeightModuleList;
