import styled from "styled-components";

import colors from "../configuration/style/colors";

const ButtonCmp = ({
                       label,
                       color = colors.primary,
                       width = 100,
                       style = {},
                       onClick = () => console.log("Button without assigned onClick")
                   }
) => {
    return <Button onClick={() => onClick()}
                   color={color}
                   width={width}
                   style={style}
    >
        {label}
    </Button>
}

const Button = styled.button`
  background-color: transparent;
  border: 2px solid ${({color}) => color};
  width: ${({width}) => `${width}%`};
  color: ${({color}) => color};
  font-size: 20px;
  border-radius: 10px;
  height: 40px;
  margin-top: 20px;
  margin-bottom: 20px;

  &:hover {
    cursor: pointer;
    color: ${({theme}) => theme.colors["faded"]};
    background-color: ${({color}) => color};

  }
`

export default ButtonCmp;