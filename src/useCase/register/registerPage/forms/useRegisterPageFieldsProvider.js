import React from "react";

function useRegisterFormField() {
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordConfirm, setPasswordConfirm] = React.useState("");

    return {
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        passwordConfirm,
        setPasswordConfirm
    }
}

export default useRegisterFormField;