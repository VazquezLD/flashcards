import styled from "styled-components";
import SubContainer from "./SubContainer";
import TitleContainer from './TitleContainer'
import { useEffect, useState } from "react";


const ThemeContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 55%;
`

const ThemeContainer = () => {

    const flashcards = []
    const [clicked, setClicked] = useState(false)

    useEffect(()=> {
        if (clicked){
            console.log('Funca')
            
        }
    }, [clicked])


    return(
        <ThemeContainerStyled>
            <TitleContainer setClicked={setClicked}/>
            <SubContainer flashcards={flashcards}/>
        </ThemeContainerStyled>
    )
}

export default ThemeContainer

