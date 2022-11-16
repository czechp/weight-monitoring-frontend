import StorageService from "../storage/storageService";

const ID = "id";
const USERNAME = "username";
const EMAIL = "email";
const ROLE = "role";
const AUTHORIZATION_HEADER = "authorizationHeader"

function AuthorizationService() {
    this._storageService = new StorageService();
    this.storeUserInfo = storeUserInfo;
    this.getUserInfo = getUserInfo;
    this.isLogged = isLogged;
    this.isAdmin = isAdmin;
    this.logout = logout

    return this;
};

function storeUserInfo({id, username, password, email, role}) {
    this._storageService.saveValue(ID, id);
    this._storageService.saveValue(USERNAME, username);
    this._storageService.saveValue(EMAIL, email);
    this._storageService.saveValue(ROLE, role);
    this._storageService.saveValue(AUTHORIZATION_HEADER, createBasicAuthorizationHeader(username, password));
}

function createBasicAuthorizationHeader(username, password) {
    return "Basic " + window.btoa(`${username}:${password}`);
}

function getUserInfo() {
    return {
        id: this._storageService.readValue(ID),
        username: this._storageService.readValue(USERNAME),
        email: this._storageService.readValue(EMAIL),
        role: this._storageService.readValue(ROLE),
        authorizationHeader: this._storageService.readValue(AUTHORIZATION_HEADER)
    };
}

function isLogged() {
    return !!this._storageService.readValue(AUTHORIZATION_HEADER);
}

function isAdmin() {
    return this._storageService.readValue(ROLE) === "ADMIN";
}

function logout() {
    this._storageService.clearStorage();
}

export default AuthorizationService;