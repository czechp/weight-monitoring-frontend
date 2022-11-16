import styled from "styled-components";
import SeparatorCmp from "./SeparatorCmp";

const TitleCmp = ({title}) => {
    return <Container>
        <Title>{title}</Title>
        <SeparatorCmp/>
    </Container>
}

const Container = styled.div`
    width: 40%;
    text-align: left;
    align-self: start;
    margin-bottom: 1rem ;
`;

const Title = styled.h3`
    margin-bottom: 0;
  
`;
export default TitleCmp;