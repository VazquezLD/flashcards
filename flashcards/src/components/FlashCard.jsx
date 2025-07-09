import styled from "styled-components";

const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: 250px;
    width: 280px;
    border: 1px solid #e9e9e9;
    transition: all 0.3s ease;
    overflow: hidden;
    border-radius: 20px;
    & span{
        font-weight: 600;
        padding: 5px;
    }
    & p{
        font-weight: 200;
        padding: 5px;
        margin: 0;
    }
    & div{
        width: 100%;
        height: 40%;
        background-color: #dadada;
        border-radius: 10px;
    }
    &:hover{
        transform: translateY(-5px);
        cursor: pointer;
    }
`

const FlashCard = () => {
    return(
        <CardStyled>
            <div></div>
            <span>Titulo de cojunto</span>
            <p>Descripcion que el usuario pone para el conjunto</p>
        </CardStyled>
    )
}

export default FlashCard