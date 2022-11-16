import styled from "styled-components";

const SelectFieldCmp = ({label = "", value, options, onChange, width = 100}) => {

    function selectFieldOnChange(event) {
        onChange(event.target.value);
    };

    return <Container>
        {label && <Label>{label}</Label>}
        <Select value={value} width={width} onChange={selectFieldOnChange}>
            {
                options.map((opt, index) => <Option key={`${opt.value}-${index}`}
                                                    value={opt.value}>{opt.label}</Option>)
            }
        </Select>
    </Container>
}
const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Label = styled.h4``


const Select = styled.select`
  width: ${({width}) => `${width}%`};
  border: none;
  border-bottom: 2px solid ${({theme}) => theme.colors.primary};
  background-color: transparent;
  height: 40px;
  text-align: center;
  font-size: 20px;
  color: ${({theme}) => theme.colors.primary}
`;

const Option = styled.option`
`;
export default SelectFieldCmp;