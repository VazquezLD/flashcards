import styled from "styled-components";

const InputStyled = styled.input`
  height: 45px;
  border-radius: 5px;
  background-color: #e4f5ff;
  border: none;
  width: 50%;
  padding-left: 10px;
  font-size: 16px;
  color: #0031b0;

  &::placeholder {
    color: #1362ff;
    opacity: 1;
  }

  &:focus {
    outline: none;
    background-color: #cfecff;
  }
`

const InputCardName = ({placeholder='nada'}) => {
  return (
    <InputStyled type="text" placeholder={placeholder}/>
        )
    }

export default InputCardName;
