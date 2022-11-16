import {useLocation} from "react-router-dom";

import PageCmp from "../../../component/PageCmp";
import GetRequestService from "../../../service/http/getRequestService";
import AccountDetailsInfoCmp from "./component/AccountDetailsInfoCmp";
import AccountAdminActivationCmp from "./component/AccountAdminActivationCmp";
import AccountChangeRoleCmp from "./component/AccountChangeRoleCmp";
import AccountDeleteCmp from "./component/AccountDeleteCmp";

const AccountDetailsPage = () => {
    const ACCOUNT_DETAILS_ENDPOINT = "/api/accounts";
    const getRequestService = new GetRequestService();
    const {state: accountId} = useLocation();
    const {
        object: account,
        reloadRequest
    } = getRequestService.getObject(`${ACCOUNT_DETAILS_ENDPOINT}/${accountId}`);

    return <PageCmp title="Szczegóły użytkownika" loaded={account}>
        {
            account && <>
                <AccountDetailsInfoCmp account={account}/>
                <AccountAdminActivationCmp accountId={account.id} reloadAccount={reloadRequest}/>
                <AccountChangeRoleCmp account={account} reloadAccount={reloadRequest}/>
                <AccountDeleteCmp accountId={account.id}/>
            </>
        }
    </PageCmp>
}

export default AccountDetailsPage;
