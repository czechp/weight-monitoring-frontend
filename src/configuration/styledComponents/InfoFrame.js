import styled from "styled-components";

const InfoFrame = styled.div`
  width: 100%;
  border: 2px solid ${({theme}) => theme.colors.primary};
  border-radius: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  font-size: larger;
`;


export default InfoFrame;