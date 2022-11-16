import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  padding: 20px;
  border-collapse: collapse;
  margin-bottom: 20px;
`;
export const Tr = styled.tr`
    &:hover{
      background-color: ${({theme}) => theme.colors.primary};
      color: ${({theme}) => theme.colors.white};
      cursor: pointer;
    }
`;

export const Thead = styled.thead``;

export const Th = styled.th`
  text-align: center;
  padding: 10px;
  border-bottom: 2px solid ${({theme}) => theme.colors.primary};
  border-top: 2px solid ${({theme}) => theme.colors.primary};
  font-size: smaller;
  &:hover{
    background-color: ${({theme}) => theme.colors.faded};
    color: ${({theme}) => theme.colors.primary};
    cursor: pointer;
  }
`;

export const Tbody = styled.tbody``;

export const Td = styled.td`
  text-align: center;
  padding: 15px;
  border-bottom: 2px solid ${({theme}) => theme.colors.primary};
  font-size: smaller;
`;