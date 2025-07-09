import styled from "styled-components";
import { IoTrashOutline } from "react-icons/io5"
import { IoIosAdd } from "react-icons/io";
import { SlOptions } from "react-icons/sl";

const TitleStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid black;
    & span{
        width: 100%;
        
    }
    & div{
        display: flex;
    }
    & button{
        background-color: transparent;
        border: none;
        font-size: 20px;
        color: black;
        &:hover{
            color: gray;
            cursor: pointer;
        }
    }
`

const TitleContainer = ({setClicked}) => {
    return(
        <TitleStyled>
            <span>Tema 1 / Conjunto 1</span>
            <div>
                <button onClick={() => {setClicked(true)}}><IoIosAdd/></button>
                <button><IoTrashOutline/></button>
                <button><SlOptions/></button>
            </div>
        </TitleStyled>
    )
}

export default TitleContainer