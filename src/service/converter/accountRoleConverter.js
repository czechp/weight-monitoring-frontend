function convertToText(role) {
    switch (role) {
        case "ADMIN":
            return "Administrator";
        case "SUPERUSER":
            return "Superuser";
        case "USER":
            return "User";
        default:
            return "Not recognized";
    }
    ;
}

function AccountRoleConverter() {
    this.toText = convertToText;
}


export default AccountRoleConverter;