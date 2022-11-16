import {Navigate} from "react-router-dom";
import AuthorizationService from "../service/authorization/authorizationService";

const AdminGuard = ({children}) => {
    const authorizationService = new AuthorizationService();
    const accessPermitted = authorizationService.isLogged() && authorizationService.isAdmin();
    return accessPermitted ? children : <Navigate to="/admin-access"/>;
}

export default AdminGuard;