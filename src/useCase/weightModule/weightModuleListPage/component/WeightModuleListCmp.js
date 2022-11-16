import {Table, Tbody, Td, Th, Thead, Tr} from "../../../../configuration/styledComponents/Table";
import colors from "../../../../configuration/style/colors";
import {useNavigate} from "react-router-dom";
import TitleCmp from "../../../../component/TitleCmp";

const WeightModuleListCmp = ({weightModules = [], setSortingField, firstModule = true}) => {
    return <>
        <TitleCmp title={`Moduły ${firstModule ? "I" : "II"}`}/>
        <Table>
            <Thead>
                <Tr>
                    <Th onClick={() => setSortingField("id")}>Id:</Th>
                    <Th onClick={() => setSortingField("productionLineSimpleEntity.lineName")}>Linia:</Th>
                    <Th onClick={() => setSortingField("status")}>Status:</Th>
                    <Th onClick={() => setSortingField("currentMeasure")}>Poprawnych pomiarów:</Th>
                    <Th onClick={() => setSortingField("totalProductPcs")}>Ilość produktów:</Th>
                    <Th onClick={() => setSortingField("totalMaterialWeight")}>Ilość parafiny:</Th>
                </Tr>
            </Thead>
            <Tbody>
                {weightModules.map((module, index) => <WeightModuleInfoRow
                    key={`${module.id}-${index}-${Math.random()}`} weightModule={module} firstModule={firstModule}/>)}
            </Tbody>
        </Table>
    </>
}

const WeightModuleInfoRow = ({weightModule, firstModule}) => {
    const navigate = useNavigate();
    const statusColor = weightModule.moduleStatus.status ? colors.success : colors.danger;
    const DETAILS_URL = firstModule ? "/weight-module-details" : "/weight-module-last-details";

    return <Tr onClick={() => navigate(DETAILS_URL, {state: weightModule.id})}>
        <Td>{weightModule.id}</Td>
        <Td>{weightModule.productionLineName}</Td>
        <Td style={{color: statusColor}}>{weightModule.moduleStatus.status ? "Włączony" : "Wyłączony"}</Td>
        <Td>{weightModule.productionIndicators.correctProductPercent.toFixed(1)} %</Td>
        <Td>{weightModule.productionIndicators.totalProductPcs} szt.</Td>
        <Td>{weightModule.productionIndicators.totalMaterialWeight.toFixed(2)} kg</Td>
    </Tr>
}

export default WeightModuleListCmp;