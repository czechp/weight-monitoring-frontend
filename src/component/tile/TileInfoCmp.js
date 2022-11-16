import styled from "styled-components";

const TileInfoCmp = ({title, children, fontSize = "normal"}) => {

    const contentStyle = {
        fontSize: determineFontSize(fontSize)
    };

    return <Container>
        {title && <Title>{title}</Title>}
        <Content style={contentStyle}>{children}</Content>
    </Container>;
}

function determineFontSize(fontSize) {
    switch (fontSize) {
        case "normal":
            return "inherit";
        case "middle":
            return "60px";
        case "large":
            return "100px";
        default:
            return "inherit";
    }
}

export default TileInfoCmp;

const Container = styled.div`
  display: flex;
  border: 2px solid ${({theme}) => theme.colors.primary};
  width: 25%;
  height: 300px;
  border-radius: 20px;
  margin: 1rem;
  flex-direction: column;
  align-items: center;

`;

const Title = styled.h3`
  margin-bottom: 0;
  text-align: center;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  text-align: center;
`;