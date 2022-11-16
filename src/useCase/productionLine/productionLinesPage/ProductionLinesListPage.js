import React from "react";
import styled from "styled-components";


import GetRequestService from "../../../service/http/getRequestService";
import PageCmp from "../../../component/PageCmp";
import TileCmp from "../../../component/tile/TileCmp";
import {faIndustry} from "@fortawesome/free-solid-svg-icons";
import ProductionLineAddComponent from "./component/ProductionLineAddComponent";

const ProductionLinesListPage = () => {
    const PRODUCTION_LINES_URI = "/api/production-lines";

    const getRequestService = new GetRequestService();
    const {objects: productionLines, reloadRequest} = getRequestService.getObjectsArray(PRODUCTION_LINES_URI);

    return <PageCmp title="Linie" loaded={productionLines}>
        <Container>
            <ProductionLineAddComponent reload={reloadRequest}/>
            <TileContainer>
                {
                    productionLines && <>
                        {
                            productionLines.map((productionLine, index) => <TileCmp
                                key={`${productionLine.id}-${Math.random()}`}
                                title={productionLine.lineName}
                                path={"/production-line-details"}
                                routingState={productionLine.id}
                                icon={faIndustry}/>)
                        }
                    </>
                }
            </TileContainer>
        </Container>
    </PageCmp>
}

const Container = styled.div`
  width: 100%;
`;

const TileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
`;


export default ProductionLinesListPage;