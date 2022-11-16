import styled from "styled-components";

const ColorExplanationCmp = ({data}) => {
    return <Container>
        {data.map((el, index) => <Tile color={el.color} key={`${el.color}-${index}`}>{el.label}</Tile>)}
    </Container>
}

const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  height: 70px;
`;

const Tile = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  border-left: 20px solid ${({color}) => color};
  height: 100%;
`;

export default ColorExplanationCmp;