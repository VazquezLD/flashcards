import styled from "styled-components";

const InputStyled = styled.input`
  min-height: 45px;
  border-radius: 5px;
  background-color: #e4f5ff;
  border: none;
  width: 50%;
  padding-left: 10px;
  font-size: 16px;
  color: #2f4886;

  &::placeholder {
    color: #183774;
    opacity: 1;
  }

  &:focus {
    outline: none;
    background-color: #bed5e6;
  }
`

const InputCardName = ({placeholder='nada'}) => {
  return (
    <InputStyled type="text" placeholder={placeholder}/>
        )
    }

export default InputCardName;
