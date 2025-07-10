import styled from "styled-components";
import { Field } from "formik";

const InputStyled = styled.input`
    border-bottom: 1px solid gray;
    border-radius: 5px;
    border: none;
    padding-left: 10px;
    background-color: #cee1ec;
    &::placeholder{
        color: #183774;
        font-weight: 300;
        font-size: 16px;
    }
  &:focus {
    outline: none;
    background-color: #b8d6f0;
  }
`

const InputComponent = ({ width, heigth = 45, name, placeholder }) => {
  return (
    <Field
      name={name}
      placeholder={placeholder}
      style={{ width: width, height: heigth }}
      as={InputStyled}
    />
  )
}

export default InputComponent