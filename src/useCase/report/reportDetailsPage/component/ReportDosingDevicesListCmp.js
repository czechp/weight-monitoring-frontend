import ContainerCmp from "../../../../component/ContainerCmp";
import GetRequestService from "../../../../service/http/getRequestService";
import {Table, Tbody, Td, Th, Thead, Tr} from "../../../../configuration/styledComponents/Table";

const ReportDosingDevicesListCmp = ({reportId, isFirst}) => {
    const URL = `/api/reports/dosing-devices-${isFirst ? "first" : "last"}/${reportId}`;
    const getRequestService = new GetRequestService();
    const {objects: dosingDevices, setSortingField} = getRequestService.getObjectsArray(URL);
    return <ContainerCmp title={isFirst ? "Moduł I" : "Moduł II"}>
        {
            dosingDevices && <><Table>
                <Thead>
                    <Tr>
                        <Th onClick={()=>setSortingField("recordNumber")}>Nr.:</Th>
                        <Th onClick={()=>setSortingField("correctPercent")}>Poprawnych <br/>pomiarów:</Th>
                        <Th onClick={()=>setSortingField("totalMaterialWeight")}>Ilość <br/> parafiny:</Th>
                        <Th onClick={()=>setSortingField("averageWeight")}>Średnia <br/> waga:</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        dosingDevices.map((dosingDevice) => <ReportDosingDeviceRow
                        key={`${dosingDevice.id}-${Math.random()}`}
                        dosingDevice={dosingDevice}/>)
                    }
                </Tbody>
            </Table></>
        }
    </ContainerCmp>
}

const ReportDosingDeviceRow = ({dosingDevice}) => {
    return <Tr>
        <Td>{dosingDevice.recordNumber}</Td>
        <Td>{dosingDevice.correctPercent.toFixed(1)} %</Td>
        <Td>{dosingDevice.totalMaterialWeight.toFixed(2)} kg</Td>
        <Td>{dosingDevice.averageWeight.toFixed(1)} g</Td>

    </Tr>
}

export default ReportDosingDevicesListCmp;