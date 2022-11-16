import styled from "styled-components";
import WeightModuleTilesCmp from "./WeightModuleTilesCmp";
import DosingDeviceListWithRequestCmp
    from "../../../dosingDevice/dosingDevicesListPage/component/DosingDeviceListWithRequestCmp";

const WeightModuleDetailsCmp = ({weightModule, firstModule=true}) => {
    return <Container>
        {weightModule && <>
            <WeightModuleTilesCmp weightModule={weightModule} firstModule={firstModule}/>
            <DosingDeviceListWithRequestCmp moduleId={weightModule.id} firstModule={firstModule} />
        </>}
    </Container>
}

export default WeightModuleDetailsCmp;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;