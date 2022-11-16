import styled from "styled-components";
import {Triangle} from "react-loader-spinner";

import colors from "../configuration/style/colors";

const LoadingSpinnerCmp = () => {
    const SPINNER_DIMENSION = 400;

    return <Container>
        <Triangle color={colors.primary} height={SPINNER_DIMENSION} width={SPINNER_DIMENSION}/>
    </Container>
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export default LoadingSpinnerCmp;