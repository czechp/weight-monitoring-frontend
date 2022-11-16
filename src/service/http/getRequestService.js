import React from "react";

import SendRequestService from "./sendRequestService";
import {StatementContext} from "../../App";
import httpErrorHandler from "./httpErrorHandler";

const NO_SORTING = "NO_SORTING";

function GetRequestService() {
    this._statementHandler = React.useContext(StatementContext);
    this._sendRequestService = new SendRequestService();

    this.getObjectsArray = useGetObjectsArray;
    this.getObject = useGetObject;

    return this;
};

function useGetObjectsArray(endpoint, paramsToSet = []) {
    const [objects, setObjects] = React.useState(null);
    const {sorting, setSortingField} = useSortingHook();
    const params = useProvideParams(paramsToSet);
    const {reload, reloadRequest} = useProvideReload();

    React.useEffect(
        () => {
            const sortingParams = createSortingParams(sorting);
            const requestParams = [...sortingParams, ...params];
            this._sendRequestService.get(endpoint, requestParams)
                .then((response) => setObjects(response.data))
                .catch((error) => this._statementHandler.showErrorInfo(httpErrorHandler(error)));
        }
        , [sorting, endpoint, params, reload]);

    return {objects, setSortingField, reloadRequest};
}

function useGetObject(endpoint, paramsToSet = []) {
    const [object, setObject] = React.useState();
    const params = useProvideParams(paramsToSet);
    const {reload, reloadRequest} = useProvideReload();


    React.useEffect(() => {
        this._sendRequestService.get(endpoint, params)
            .then((response) => setObject(response.data))
            .catch((error) => this._statementHandler.showErrorInfo(httpErrorHandler(error)));
    }, [endpoint, params, reload]);

    return {
        object,
        reloadRequest
    };
}

export const useSortingHook = (field = NO_SORTING, asc = true) => {
    const [sorting, setSorting] = React.useState({field, asc});
    return {
        sorting,
        setSortingField: (field) => setSorting(prevState => ({asc: !prevState.asc, field: field}))
    }
}

function createSortingParams({field, asc}) {
    if (field !== NO_SORTING) {
        const paramsArray = [];
        let sortingParam = `${field},${asc ? "asc" : "desc"}`
        paramsArray.push({sort: sortingParam});
        return paramsArray;
    } else
        return [];
}

function useProvideParams(paramsToSet) {
    const [params, setParams] = React.useState([]);
    React.useEffect(() => {
        if (params.length > 0)
            setParams(paramsToSet)
    }, [params, paramsToSet]);
    return params;
}

function useProvideReload() {
    const [reload, setReload] = React.useState(false);
    return {
        reload,
        reloadRequest: () => setReload((prevState) => !prevState)
    }
}


export default GetRequestService;