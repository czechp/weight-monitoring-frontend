import React from "react";
import styled from "styled-components";

import colors from "../configuration/style/colors";
import LoadingSpinnerCmp from "./LoadingSpinnerCmp";

const PageCmp = ({title, children, loaded = true}) => {
    return <Container>
        <Title>{title}</Title>
        <hr width="30%" align="left" color={colors.primary}/>
        {loaded ? <Content>{children}</Content> : <LoadingSpinnerCmp/>}
    </Container>

}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const Title = styled.h2`
    align-self: flex-start;
    margin-bottom: 0px;
`

const Content = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
`


export default PageCmp;