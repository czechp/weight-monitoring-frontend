import createAxiosInstance from "../../configuration/http/axiosConfiguration";

function SendRequestService() {
    this._axios = createAxiosInstance();
    this.get = (endpoint, params = []) => this._axios.get(endpoint, createConfig(params));
    this.post = (endpoint, body = {}, params = []) => this._axios.post(endpoint, body, createConfig(params));
    this.patch = (endpoint, body = {}, params = []) => this._axios.patch(endpoint, body, createConfig(params));
    this.delete = (endpoint, params = []) => this._axios.delete(endpoint, createConfig(params));
}


function createConfig(params = []) {
    return {
        params: createParams(params)
    };
}

function createParams(params) {
    const urlParams = new URLSearchParams();
    params.forEach(p => {
        const {key, value} = createKeyValuePair(p);
        urlParams.append(key, value);
    })
    return urlParams;
}

function createKeyValuePair(param) {
    const key = Object.keys(param)[0];
    const value = param[key];
    return {key, value};
}


export default SendRequestService;