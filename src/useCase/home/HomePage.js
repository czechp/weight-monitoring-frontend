import React from "react";
import styled from "styled-components";
import {faChartColumn, faFilter, faIndustry, faScaleBalanced, faUser} from "@fortawesome/free-solid-svg-icons";


import PageCmp from "../../component/PageCmp";
import TileCmp from "../../component/tile/TileCmp";

const HomePage = () => {
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => setLoaded(true), 500);
    }, []);

    return <PageCmp title="Strona główna" loaded={loaded}>
        <Container>
            <TileCmp path="/production-lines" title={"Linie"} icon={faIndustry}/>
            <TileCmp path="/weight-modules" title={"Moduły wagowe"} icon={faScaleBalanced}/>
            <TileCmp path="/dosing-devices" title={"Dysze dozujące"} icon={faFilter}/>
            <TileCmp path="/reports" title={"Raporty"} icon={faChartColumn}/>
            <TileCmp path="/accounts" title={"Użytkownicy"} icon={faUser}/>
        </Container>
    </PageCmp>
}


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
`;


export default HomePage;