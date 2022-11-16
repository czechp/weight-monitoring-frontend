import styled from "styled-components";

import PageCmp from "./PageCmp";
import colors from "../configuration/style/colors";

const InfoPageCmp = ({title, children, error = false}) => {
    const color = error ? colors.danger : colors.success;

    return <PageCmp title={title}>
        <Container color={color}>
            {children}
        </Container>
    </PageCmp>
};

const Container = styled.div`
  color: ${({color}) => color};
  border: 4px solid ${({color}) => color};
  min-width: 90%;
  min-height: 400px;
  border-radius: 20px;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 40px;
  flex-direction: column;
  text-align: center;
`

export default InfoPageCmp;