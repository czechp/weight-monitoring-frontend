import styled from "styled-components";

import ContainerCmp from "../../../../component/ContainerCmp";
import TileInfoCmp from "../../../../component/tile/TileInfoCmp";
import CircleProgressBarCmp from "../../../../component/CircleProgressBarCmp";
import colors from "../../../../configuration/style/colors";

const ReportDetailsTilesCmp = ({report}) => {
    return <ContainerCmp title={"Informacje"}>
        <Container>

            <TileInfoCmp title="Linia:" fontSize="large">{report.lineName}</TileInfoCmp>
            <TileInfoCmp title="Data:" fontSize="middle">{report.reportDate}</TileInfoCmp>
            <TileInfoCmp title="Zmiana:" fontSize="large">{report.workShift}</TileInfoCmp>
            <TileInfoCmp title="Poprawnych pomiarów:" fontSize="middle">
                <CircleProgressBarCmp style={{width: "60%"}}
                                      value={report.correctProductPercent}
                                      text={`${report.correctProductPercent.toFixed(2)}%`}
                                      color={colors.primary}
                />
            </TileInfoCmp>
            <TileInfoCmp title="Ilość produktu:" fontSize="middle">{report.totalProductPcs} szt.</TileInfoCmp>
            <TileInfoCmp title="Różnica wagi:" fontSize="middle">{report.weightDifference.toFixed(2)} kg</TileInfoCmp>
            <TileInfoCmp title="Ilość niepoprawnego produktu:" fontSize="middle">{report.incorrectProductPcs} szt.</TileInfoCmp>
            <TileInfoCmp title="Ilość przelanego produktu:" fontSize="middle">{report.overFilledProductPcs} szt.</TileInfoCmp>
            <TileInfoCmp title="Ilość niedolanego produktu:" fontSize="middle">{report.notRefilledProductPcs} szt.</TileInfoCmp>


        </Container>
    </ContainerCmp>
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default ReportDetailsTilesCmp;