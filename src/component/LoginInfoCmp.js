import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";


import AuthorizationService from "../service/authorization/authorizationService";
import ButtonCmp from "./ButtonCmp";
import colors from "../configuration/style/colors";

const LoginInfoCmp = () => {
    const authorizationService = new AuthorizationService();
    const navigate = useNavigate();
    const userLogged = authorizationService.isLogged();
    const userInfo = authorizationService.getUserInfo();

    function logoutBtnOnClick() {
        authorizationService.logout();
        navigate("/login");
    }

    return <Container>
        {userLogged &&
            <>
                <UserInfo>{userInfo.username}</UserInfo>
                <UserInfo>{userInfo.email}</UserInfo>
                <ButtonCmp label="Logout"
                           color={colors.danger}
                           style={{marginTop: "10px", marginBottom: "10px"}}
                           onClick={logoutBtnOnClick}
                />
            </>
        }
    </Container>

}
const Container = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 20px;
`

const UserInfo = styled.span`
  font-size: smaller;
  margin-top: 3px;
  font-style: italic;
`

export default LoginInfoCmp;