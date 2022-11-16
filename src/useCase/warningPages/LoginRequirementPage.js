import styled from "styled-components";

import InfoPageCmp from "../../component/InfoPageCmp";
import ButtonCmp from "../../component/ButtonCmp";
import {useNavigate} from "react-router-dom";

const LoginRequirementPage = () => {
    const navigate = useNavigate();

    return <InfoPageCmp title="Wymagane logowanie" error={true}>
        <Text>Dostęp do zasobów tylko po zalogowaniu</Text>
        <ButtonCmp label="Login" width={"50"} onClick={() => navigate("/login")}/>
    </InfoPageCmp>
}

const Text = styled.p`
  text-align: center;
`;

export default LoginRequirementPage;

