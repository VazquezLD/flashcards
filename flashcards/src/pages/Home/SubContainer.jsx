import styled from "styled-components";

const SubStyled = styled.div`
    display: grid;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    grid-template-columns: repeat(3, 1fr);
    padding-top: 30px;
    gap: 15px;
`

const SubContainer = ({flashcards}) => {

    return(
        <SubStyled>
            {flashcards.length === 0 ? (<span>No tienes flashcards aún</span>) : console.log(flashcards.length)}
        </SubStyled>
    )
}

export default SubContainer