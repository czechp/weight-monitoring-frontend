import styled from "styled-components";

import SeparatorCmp from "../component/SeparatorCmp";
import LoginInfoCmp from "../component/LoginInfoCmp";

const TopBarLayout = () => {
    return <>
        <Container>
            <TitleContainer>
                <Title>
                    <TitleHeader>Moduły wagowe</TitleHeader>
                    <TitleSubheader>Moduły wagowe</TitleSubheader>
                </Title>
            </TitleContainer>
            <LogoContainer>
                <Logo src=""/>
            </LogoContainer>
            <LoginInfoCmp/>
        </Container>
        <SeparatorCmp/>
    </>
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
`;

const LogoContainer = styled.div`
  height: 100%;
`;

const Logo = styled.img`
    height: 100%;
`;

const TitleHeader = styled.h1`
  margin-top: 10px;
  margin-bottom: 0px;
`;

const TitleSubheader = styled.h6`
  margin-top: 5px;
  margin-bottom: 5px;
`;

const TitleContainer = styled.div``;

const Title = styled.div``;


export default TopBarLayout;