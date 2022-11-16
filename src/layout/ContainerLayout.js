import styled from "styled-components";

const ContainerLayout = ({children}) => {
    return <Container>
        {children}
    </Container>
}


export const StickyTopContainer = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 5;
  background-color: white;
`

const Container = styled.div`
  width: 100%;
`

export default ContainerLayout;