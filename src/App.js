import React from "react";
import {ThemeProvider} from "styled-components";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import theme from "./configuration/style/theme";
import GlobalStyles from "./configuration/style/globalStyles";
import ContainerLayout, {StickyTopContainer} from "./layout/ContainerLayout";
import TopBarLayout from "./layout/TopBarLayout";
import NavigationBarLayout from "./layout/NavigationBarLayout";
import LoginPage from "./useCase/login/loginPage/LoginPage";
import {createStatementContext, useProvideStatementValues} from "./context/useStatementContext";
import LoginRequirementPage from "./useCase/warningPages/LoginRequirementPage";
import RegisterPage from "./useCase/register/registerPage/RegisterPage";
import ActivateAccountPage from "./useCase/register/activeAccountPage/ActivateAccountPage";
import StatementCmp from "./component/StatementCmp";
import AdminRequirementPage from "./useCase/warningPages/AdminRequirementPage";
import AdminGuard from "./guard/AdminGuard";
import AccountsListPage from "./useCase/account/accountsListPage/AccountsListPage";
import AccountDetailsPage from "./useCase/account/accountDetailsPage/AccountDetailsPage";
import HomePage from "./useCase/home/HomePage";
import RestorePasswordDemandPage from "./useCase/account/restorePasswordDemandPage/RestorePasswordDemandPage";
import RestorePasswordApplyTokenPage
    from "./useCase/account/restorePasswordApplyTokenPage/RestorePasswordApplyTokenPage";
import LoginGuard from "./guard/LoginGuard";
import ProductionLineDetailsPage from "./useCase/productionLine/productionLineDetailsPage/ProductionLineDetailsPage";
import ProductionLinesListPage from "./useCase/productionLine/productionLinesPage/ProductionLinesListPage";
import WeightModuleListPage from "./useCase/weightModule/weightModuleListPage/WeightModuleListPage";
import WeightModuleDetailsPage from "./useCase/weightModule/weightModuleDetailsPage/WeightModuleDetailsPage";
import WeightModuleLastDetailsPage
    from "./useCase/weightModule/weightModuleLastDetailsPage/WeightModuleLastDetailsPage";
import DosingDeviceListPage from "./useCase/dosingDevice/dosingDevicesListPage/DosingDeviceListPage";
import ReportListPage from "./useCase/report/reportListPage/ReportListPage";
import ReportDetailsPage from "./useCase/report/reportDetailsPage/ReportDetailsPage";

export const StatementContext = createStatementContext();

function App() {
    const statementContextValue = useProvideStatementValues();


    return (<div className="App">
        <ThemeProvider theme={theme}>
            <GlobalStyles/>

            <StatementContext.Provider value={statementContextValue}>
                <BrowserRouter>
                    <ContainerLayout>
                        <StickyTopContainer>
                            <TopBarLayout/>
                            <NavigationBarLayout/>
                        </StickyTopContainer>
                        <Routes>
                            <Route path="/" element={<LoginGuard><HomePage/></LoginGuard>}/>
                            <Route path="/login" element={<LoginPage/>}/>
                            <Route path="/register" element={<RegisterPage/>}/>
                            <Route path="/restore-password-demand" element={<RestorePasswordDemandPage/>}/>
                            <Route path="/restore-password-token" element={<RestorePasswordApplyTokenPage/>}/>
                            <Route path="/activate-account" element={<ActivateAccountPage/>}/>
                            <Route path="/accounts" element={<AdminGuard><AccountsListPage/></AdminGuard>}/>
                            <Route path="/account-details" element={<AdminGuard><AccountDetailsPage/></AdminGuard>}/>
                            <Route path="/not-logged" element={<LoginRequirementPage/>}/>
                            <Route path="/admin-access" element={<AdminRequirementPage/>}/>
                            <Route path="/production-line-details"
                                   element={<LoginGuard><ProductionLineDetailsPage/></LoginGuard>}/>
                            <Route path="/production-lines"
                                   element={<LoginGuard><ProductionLinesListPage/></LoginGuard>}/>
                            <Route path="/weight-modules" element={<LoginGuard><WeightModuleListPage/></LoginGuard>}/>
                            <Route path="/weight-module-details"
                                   element={<LoginGuard><WeightModuleDetailsPage/></LoginGuard>}/>
                            <Route path="/weight-module-last-details"
                                   element={<LoginGuard><WeightModuleLastDetailsPage/></LoginGuard>}/>
                            <Route path="/dosing-devices" element={<LoginGuard><DosingDeviceListPage/></LoginGuard>}/>
                            <Route path="/reports" element={<LoginGuard><ReportListPage/> </LoginGuard>}/>
                            <Route path="/report-details" element={<LoginGuard><ReportDetailsPage/></LoginGuard>}/>
                        </Routes>

                    </ContainerLayout>
                </BrowserRouter>
                <StatementCmp/>
            </StatementContext.Provider>
        </ThemeProvider>


    </div>);
}

export default App;
