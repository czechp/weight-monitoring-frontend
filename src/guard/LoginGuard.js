import {Navigate} from "react-router-dom";

import AuthorizationService from "../service/authorization/authorizationService";

const LoginGuard = ({children}) => {
    const authorizationService = new AuthorizationService();
    return authorizationService.isLogged() ? children : <Navigate to="/not-logged"/>
}

export default LoginGuard;