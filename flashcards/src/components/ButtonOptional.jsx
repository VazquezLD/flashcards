import styled from "styled-components";
import { IoArrowBackOutline } from "react-icons/io5";

const ButtonStyled = styled.button`
    padding: 5px;
    border: none;
    cursor: pointer;
    border: 1px solid #8d8d8d84;
    border-radius: 5px;
    background-color: white;
    &:focus{
        background-color: gray;
    }
`

const ButtonOptional = ({setClicked}) => {
    return(
        <ButtonStyled onClick={() => {setClicked(null)}}>
            <IoArrowBackOutline/>
        </ButtonStyled>
    )
}

export default ButtonOptional