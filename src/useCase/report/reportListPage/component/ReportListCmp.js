import ContainerCmp from "../../../../component/ContainerCmp";
import {Table, Tbody, Td, Th, Thead, Tr} from "../../../../configuration/styledComponents/Table";
import DateConverter from "../../../../service/converter/dateConverter";
import {useNavigate} from "react-router-dom";

const ReportListCmp = ({
                           reports,
                           setSortingField = () => {
                           }
                       }) => {
    return <ContainerCmp title="Raporty" loaded={reports}>
        <Table>
            <Thead>
                <Tr>
                    <Th onClick={() => setSortingField("id")}>Id:</Th>
                    <Th onClick={() => setSortingField("lineName")}>Linia:</Th>
                    <Th onClick={() => setSortingField("reportDate")}>Data:</Th>
                    <Th onClick={() => setSortingField("workShift")}>Zmiana:</Th>
                    <Th onClick={() => setSortingField("correctProductPercent")}>Ilość poprawnych <br/> pomiarów:</Th>
                    <Th onClick={() => setSortingField("totalProductPcs")}>Ilość <br/> produktu:</Th>
                    <Th onClick={() => setSortingField("totalMaterialWeight")}>Ilość <br/> parafiny:</Th>
                    <Th onClick={() => setSortingField("weightDifference")}>Różnica w <br/> wadze:</Th>
                    <Th onClick={() => setSortingField("incorrectProductPcs")}>Ilość <br/>niepoprawego <br/> produktu:</Th>
                    <Th onClick={() => setSortingField("overFilledProductPcs")}>Ilość <br/> przelanego <br/> produktu:</Th>
                    <Th onClick={() => setSortingField("notRefilledProductPcs")}>Ilość <br/> niedolanego <br/> produktu:</Th>
                </Tr>
            </Thead>
            <Tbody>
                {reports.map((el) => <ReportInfoRow key={`${el.id}-${Math.random()}`} report={el}/>)}
            </Tbody>
        </Table>
    </ContainerCmp>
}

const ReportInfoRow = ({report}) => {
    const dateConverter = new DateConverter();
    const navigate = useNavigate();

    function navigateToReportDetails() {
        navigate("/report-details", {state: report.id})
    }

    return <Tr onClick={navigateToReportDetails}>
        <Td>{report.id}</Td>
        <Td>{report.lineName}</Td>
        <Td>{dateConverter.toFullDate(report.reportDate)}</Td>
        <Td>{report.workShift}</Td>
        <Td>{report.correctProductPercent.toFixed(2)} %</Td>
        <Td>{report.totalProductPcs} szt.</Td>
        <Td>{report.totalMaterialWeight} kg</Td>
        <Td>{report.weightDifference.toFixed(2)} kg</Td>
        <Td>{report.incorrectProductPcs} szt.</Td>
        <Td>{report.overFilledProductPcs} szt.</Td>
        <Td>{report.notRefilledProductPcs} szt.</Td>
    </Tr>
}

export default ReportListCmp;