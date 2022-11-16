import ContainerCmp from "../../../../component/ContainerCmp";
import {Table, Tbody, Td, Th, Thead, Tr} from "../../../../configuration/styledComponents/Table";

const DosingDevicesListCmp = ({dosingDevices, setSorting, title = "Dysze dozujące"}) => {
    return <ContainerCmp title={title} loaded={dosingDevices}>
        {dosingDevices && <Table>
            <Thead>
                <Tr>
                    <Th onClick={() => {
                        setSorting("id")
                    }}>Nr.:</Th>
                    <Th onClick={() => {
                        setSorting("lineName")
                    }}>Linia:</Th>
                    <Th onClick={() => {
                        setSorting("totalMaterial")
                    }}>Ilość parafiny:</Th>
                    <Th onClick={() => {
                        setSorting("correctMeasurePercent")
                    }}>Poprawnych <br/> pomiarów:</Th>
                    <Th onClick={() => {
                        setSorting("averageMeasure")
                    }}>Średnia <br/> waga:</Th>
                    <Th onClick={() => {
                        setSorting("amountBelowMeasures")
                    }}>Pomiarów <br/> poniżej wagi:</Th>
                    <Th onClick={() => {
                        setSorting("amountCorrectMeasures")
                    }}>Poprawnych <br/> pomiarów:</Th>
                    <Th onClick={() => {
                        setSorting("amountAboveMeasures")
                    }}>Pomiarów <br/> powyżej wagi:</Th>
                </Tr>
            </Thead>
            <Tbody>
                {dosingDevices.map((element) => <DosingDeviceRow key={`${element.id}-${Math.random()}`}
                                                                 dosingDevice={element}/>)}
            </Tbody>
        </Table>}
    </ContainerCmp>
}

const DosingDeviceRow = ({dosingDevice}) => {
    return <Tr>
        <Td>{dosingDevice.recordNumber}</Td>
        <Td>{dosingDevice.moduleInfo.lineName}</Td>
        <Td>{`${dosingDevice.totalMaterial.toFixed(1)} kg`}</Td>
        <Td>{`${dosingDevice.measures.correctMeasurePercent}%`}</Td>
        <Td>{`${dosingDevice.measures.averageMeasure.toFixed(1)} g`}</Td>
        <Td>{`${dosingDevice.measures.amountBelowMeasures} szt.`}</Td>
        <Td>{`${dosingDevice.measures.amountCorrectMeasures} szt.`}</Td>
        <Td>{`${dosingDevice.measures.amountAboveMeasures} szt.`}</Td>
    </Tr>

}

export default DosingDevicesListCmp;

