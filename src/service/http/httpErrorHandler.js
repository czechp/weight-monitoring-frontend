function errorObjectExist(error) {
    return error?.response?.status;
}

function generateInfoByStatus(error) {
    switch (error.response.status) {
        case 400:
            return error.response.data.message;
        case 401:
            return "Niepoprawny login lub hasło";
        case 403:
            return "Nie masz dostępu do tych zasobów";
        case 404:
            return error.response.data.message || "Ten element nie istnieje"
        case 405:
            return "Nie poprawna metoda HTTP"
        case 500:
            return "Błąd serwera"
        default:
            return "Nie znany kod odpowiedzi";
    }
}

function httpErrorHandler(error) {
    return errorObjectExist(error) ? generateInfoByStatus(error) : "Nieznany błąd";
}

export default httpErrorHandler;
