import axios from "axios";
import {BACKEND_URL} from "../../constant/URL";
import AuthorizationService from "../../service/authorization/authorizationService";

function addAuthorizationHeader(axiosInstance) {
    const authorizationService = new AuthorizationService();
    axiosInstance.interceptors.request.use(function (config) {
        const {authorizationHeader} = authorizationService.getUserInfo();
        if (authorizationHeader)
            config.headers["Authorization"] = authorizationHeader;
        return config;
    });
}

function createAxiosInstance() {
    const axiosInstance = axios.create({baseURL: BACKEND_URL});
    addAuthorizationHeader(axiosInstance);
    return axiosInstance;
}

export default createAxiosInstance;