import styled from "styled-components";
import SubContainer from "./SubContainer";
import TitleContainer from './TitleContainer'
import { useEffect, useState } from "react";
import CreateCard from "./CreateCard";

const ThemeContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 55%;
`

const ThemeContainer = () => {

    const [flashcards, setFlashcards] = useState([])
    const [clicked, setClicked] = useState(false)

    useEffect(()=> {
        console.log(flashcards)
    }, [flashcards])


    return(
        <>
            {clicked && <CreateCard setClicked={setClicked} setFlashcards={setFlashcards}/>}
            <ThemeContainerStyled>
                <TitleContainer setClicked={setClicked}/>
                <SubContainer flashcards={flashcards}></SubContainer>
            </ThemeContainerStyled>
            <ThemeContainerStyled>
                <TitleContainer setClicked={setClicked}/>
                <SubContainer flashcards={flashcards}></SubContainer>
            </ThemeContainerStyled>
        </>
    )
}

export default ThemeContainer

