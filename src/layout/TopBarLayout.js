import styled from "styled-components";

import SeparatorCmp from "../component/SeparatorCmp";
import LoginInfoCmp from "../component/LoginInfoCmp";
import logo from "../image/bispol-logo.png";

const TopBarLayout = () => {
    return <>
        <Container>
            <TitleContainer>
                <Title>
                    <TitleHeader>Tealight</TitleHeader>
                    <TitleSubheader>Moduły wagowe na hali F</TitleSubheader>
                </Title>
            </TitleContainer>
            <LogoContainer>
                <Logo src={logo}/>
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