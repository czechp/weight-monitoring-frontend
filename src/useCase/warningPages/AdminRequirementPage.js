import React from "react";
import styled from "styled-components";

import InfoPageCmp from "../../component/InfoPageCmp";

const AdminRequirementPage = () => {
    return <InfoPageCmp error title="Dostęp zabroniony">
        <Text>Dostęp tylko dla administratorów systemu.</Text>
    </InfoPageCmp>
}

const Text = styled.p`
`;

export default AdminRequirementPage;