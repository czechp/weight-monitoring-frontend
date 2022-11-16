import React from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import colors from "../configuration/style/colors";
import ButtonCmp from "./ButtonCmp";

const ModalDialogCmp = ({title, children, handler}) => {
    const [scrollPosition, setScrollPosition] = React.useState(0);

    function closeBtnOnClick() {
        handler.hideModal();
        window.scroll(0, scrollPosition);
    }

    React.useEffect(() => {
        if (handler.visibility) {
            setScrollPosition(document.documentElement.scrollTop);
            window.scroll(0, 0);
        }
    }, [handler]);

    return <>
        {
            handler.visibility && <Container>
                <ModalDialog>
                    <Header>
                        <TitleWrapper>
                            <Title>{title}</Title>
                            <hr align="left" color={colors.primary}/>
                        </TitleWrapper>
                        <CloseButton onClick={closeBtnOnClick}><FontAwesomeIcon icon={faXmark} size={"2x"}/></CloseButton>
                    </Header>
                    <Content>
                        {children}
                    </Content>
                    <ButtonCmp label="Anuluj" onClick={closeBtnOnClick} color={colors.danger}/>
                </ModalDialog>
            </Container>
        }
    </>;
}

const Container = styled.div`
  width: 100%;
  min-height: 300px;
  position: absolute;
  top: 0;
  height: 100%;
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ModalDialog = styled.div`
  background-color: ${({theme}) => theme.colors.background};
  margin-top: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${({theme}) => theme.colors.primary};
  border-radius: 20px;
  padding: 20px;
`

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  width: 50%;
`;

const Title = styled.h3``;

const CloseButton = styled.div`
  color: ${({theme}) => theme.colors.danger};

  &:hover {
    cursor: pointer;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export function useModalDialog() {
    const [visibility, setVisibility] = React.useState(false);
    return {
        visibility,
        showModal: () => setVisibility(true),
        hideModal: () => setVisibility(false)
    };
}

export default ModalDialogCmp;