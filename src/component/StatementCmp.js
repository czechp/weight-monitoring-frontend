import styled from "styled-components";
import React, {useCallback} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faCircleExclamation, faXmark} from "@fortawesome/free-solid-svg-icons";

import colors from "../configuration/style/colors";
import {StatementContext} from "../App";

const StatementCmp = () => {
    const VISIBILITY_DURATION_MILLISECONDS = 3000;
    const {text, error, setStatement} = React.useContext(StatementContext);
    const [visibility, setVisibility] = React.useState(false);
    const color = error ? colors.danger : colors.success;
    const icon = error ? faCircleExclamation : faCircleCheck;

    const closeStatement = useCallback(() => {
        setStatement({text: "", error: false});
        setVisibility(false);
    }, [setStatement, setVisibility]);

    const showStatementIfExists = function () {
        if (text) {
            setVisibility(true);
            setTimeout(() => {
                closeStatement();
            }, VISIBILITY_DURATION_MILLISECONDS);
        }
    }

    React.useEffect(showStatementIfExists, [text, setStatement, closeStatement]);

    return <>
        {visibility && <Container color={color}>
            <FontAwesomeIcon icon={icon} color={color} size={"5x"} style={{marginRight: "50px"}}/>
            <FontAwesomeIcon icon={faXmark} style={xMarkStyle} size={"2x"} onClick={closeStatement}/>
            <TextContainer>{text}</TextContainer>
        </Container>}
    </>
}

const Container = styled.div`
  border: ${({color}) => `2px solid ${color}`};
  color: ${({color}) => color};
  background-color: white;
  width: 500px;
  min-height: 70px;
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 20px;
  padding: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
`
const TextContainer = styled.p`
  text-align: center;
  width: 100%;
`

const xMarkStyle = {
    position: "absolute",
    top: "5px",
    right: "15px",
    cursor: "pointer"
}
export default StatementCmp;