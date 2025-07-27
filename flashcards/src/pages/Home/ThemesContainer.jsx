import styled from "styled-components";
import ThemeContainer from "./ThemeContainer";

const ThemesContainerStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    overflow-y: scroll;
`

export const ThemesContainer = ({themes, setFlashcardMap, flashcardMap}) => {
    return(
        <ThemesContainerStyled>
            {themes.length === 0 && <span>No tienes temas aún...</span>}
            <ThemeContainer themes={themes} setFlashcardMap={setFlashcardMap} flashcardMap={flashcardMap}/>
        </ThemesContainerStyled>
    )
}