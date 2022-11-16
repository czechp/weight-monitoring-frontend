import styled from "styled-components";

const TextInputCmp = ({label, placeholder = "", value, onChange, minLength, type = "text"}) => {
    const showMinLength = minLength && value.length < minLength;

    function textOnChange(event) {
        return onChange(event.target.value);
    }

    return <Container>
        <Label>{label}</Label>
        <TextInput type={type} placeholder={placeholder} value={value} onChange={(event) => textOnChange(event)}/>
        {showMinLength && <Warning>Minimalna długość tekstu to {minLength} znaki </Warning>}
    </Container>
}

const Container = styled.div`
  width: 100%;
  margin-bottom: 10px;
`

const Label = styled.h4``

const Warning = styled.h6`
  margin-top: 10px;
  margin-bottom: 0;
  color: ${({theme}) => theme.colors.danger}
`

const TextInput = styled.input`
  border: none;
  border-bottom: ${({theme}) => `1px solid ${theme.colors.primary}`};
  height: 30px;
  width: 100%;
  background-color: transparent;
  text-align: center;
  font-size: 20px;
  color: ${({theme}) => theme.colors.primary}
`

export default TextInputCmp;