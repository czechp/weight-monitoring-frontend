import styled from "styled-components";

const InfoCardCmp = ({data = []}) => {
    return <Container>
        {data.map((row, index) => <InfoCardRow key={index} row={row} index={index}/>)}
    </Container>
}

const InfoCardRow = ({row = {style: {}}}) => {
    return <RowContainer>
        <RowWrapper style={row.style}>
            <RowText>{row.label}</RowText>
            <RowText>{row.value}</RowText>
        </RowWrapper>
    </RowContainer>
}

const Container = styled.div`
  width: 100%;
  border: 2px solid ${({theme}) => theme.colors.primary};
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 50px;
  box-sizing: border-box;
`;

const RowContainer = styled.div`
  width: 100%;

`;

const RowWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: smaller;
  padding-top: 5px;
  padding-bottom: 5px;

  &:hover {
    color: ${({theme}) => theme.colors.secondary}
  }
`;

const RowText = styled.span`
`;


export default InfoCardCmp;