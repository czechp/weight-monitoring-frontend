import styled from "styled-components";
import openLinkInNewTab from "../../service/utils/openLinkInNewTab";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

const TileCmp = ({title, icon, path, external, routingState}) => {

    function tileOnClick() {
        if (external) openLinkInNewTab(path); else navigate(path, {state: routingState});
    }

    const navigate = useNavigate();
    return <Tile onClick={tileOnClick}>
        <TileHeader>{title}</TileHeader>
        <FontAwesomeIcon icon={icon} size={"5x"}/>
    </Tile>
}

const Tile = styled.div`
  border: 2px solid ${({theme}) => theme.colors.primary};
  border-radius: 10px;
  width: 15%;
  height: 25vh;
  margin: 1%;
  padding: 1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.faded}
  }
`;

const TileHeader = styled.h3`
  margin: 0 0 2rem 0;
`;

export default TileCmp;