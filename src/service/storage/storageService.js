// const storageService = {
//     saveValue: function (valueName, value) {
//         localStorage.setItem(valueName, value);
//     },
//     readValue: function (valueName) {
//         return localStorage.getItem(valueName);
//     },
//     clearStorage: function () {
//         localStorage.clear();
//     }
// };

function StorageService() {
    this.saveValue = (valueName, value) => localStorage.setItem(valueName, value);
    this.readValue = (valueName) => localStorage.getItem(valueName);
    this.clearStorage = () => localStorage.clear();
    return this;
}

export default StorageService;