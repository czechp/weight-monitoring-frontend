import React from "react";

import PageCmp from "../../../component/PageCmp";
import {useLocation} from "react-router-dom";
import RestorePasswordApplyTokenCmp from "./component/RestorePasswordApplyTokenCmp";


const RestorePasswordApplyTokenPage = () => {
    const {state: tokenFromBackend} = useLocation();
    const defaultToken = tokenFromBackend || "Empty";

    return <PageCmp title="Apply restore password token">
        <RestorePasswordApplyTokenCmp defaultToken={defaultToken}/>
    </PageCmp>
}

export default RestorePasswordApplyTokenPage;