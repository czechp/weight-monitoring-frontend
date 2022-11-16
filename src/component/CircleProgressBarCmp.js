import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import styled from "styled-components";

const CircleProgressBarCmp = ({title, value, text, style = {}, color}) => {
    const barStyle = color ? {pathColor: color, textColor: color} : {};

    return <Container style={style}>
        {title && <Title>{title}</Title>}
        <CircularProgressbar value={value} text={text} styles={
            buildStyles(barStyle)}/>
    </Container>
}

const Container = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

const Title = styled.h3`
  text-align: center;
`;


export default CircleProgressBarCmp;