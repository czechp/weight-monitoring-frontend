import styled from "styled-components";
import InfoCardCmp from "../../../../component/InfoCardCmp";
import AccountRoleConverter from "../../../../service/converter/accountRoleConverter";
import DateConverter from "../../../../service/converter/dateConverter";

const AccountDetailsInfoCmp = ({account}) => {
    const accountRoleConverter = new AccountRoleConverter();
    const dateConverter = new DateConverter();

    function createConfirmationText(status) {
        return status ? "Yes" : "No";
    }

    const accountInfo = [
        {label: "Id:", value: account.id},
        {label: "Login:", value: account.username},
        {label: "Email:", value: account.email},
        {label: "Uprawnienia:", value: accountRoleConverter.toText(account.role)},
        {label: "Data utworzenia:", value: dateConverter.toFullDateTime(account.creationTimestamp)},
        {label: "Potwierdzenie email:", value: createConfirmationText(account.emailConfirmed)},
        {label: "Aktywacja administratora:", value: createConfirmationText(account.adminActivated)}
    ]
    return <Container>
        <InfoCardCmp data={accountInfo}/>
    </Container>
}

const Container = styled.div`
  width: 100%;
`;

export default AccountDetailsInfoCmp;
