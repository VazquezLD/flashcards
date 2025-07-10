import styled from "styled-components";

const AceptStyled = styled.button`
    width: 100px;
    height: 45px;
    border-radius: 5px;
    color: #183774;
    background-color: #cee1ec;
    border: none;
    cursor: pointer;
    border: 1px solid #002f962b;
    &:focus{
        background-color: #7588ad;
        color: #cee1ec;
    }
`

const ButtonAcept = ({ text = "Aceptar", type = "submit"}) => {

  return (
    <AceptStyled type={type}>
      {text}
    </AceptStyled>
  )
}

export default ButtonAcept
