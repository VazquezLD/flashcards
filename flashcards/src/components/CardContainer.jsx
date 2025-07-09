import styled from "styled-components";
import FlashCard from "./FlashCard";

const ContainerStyled = styled.div`
    width: 55%;
    min-height: 40vh;
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 10px;
`

const CardContainer = ({children}) => {
    return(
        <ContainerStyled>
            <>
                {children}
                <FlashCard/>
            </>
        </ContainerStyled>
    )
}

export default CardContainer