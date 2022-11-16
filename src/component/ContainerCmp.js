import styled from "styled-components";
import SeparatorCmp from "./SeparatorCmp";

const ContainerCmp = ({title, children, loaded = true}) => {
    return <>
        {loaded && <Container>
            {title && <HeaderWrapper>
                <Title>{title}</Title>
                <SeparatorCmp/>
            </HeaderWrapper>}
            {children}
        </Container>}
    </>
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`

const HeaderWrapper = styled.div`
  margin-top: 0;
  display: flex;
  align-self: start;
  flex-direction: column;
  width: 40%;
`

const Title = styled.h3`
  margin-bottom: 0;
`;

export default ContainerCmp;