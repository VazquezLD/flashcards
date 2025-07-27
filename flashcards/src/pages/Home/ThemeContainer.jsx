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
    width: 70%;
`

const ThemeContainer = ({themes, setFlashcardMap, flashcardMap}) => {
    
    const [clicked, setClicked] = useState(null)
    
    useEffect(() => {
        console.log(clicked)
    }, [clicked])

    return (
        <>
            {themes.map((theme, index) => (
                <ThemeContainerStyled key={index}>
                    {clicked !== null && clicked === index && <CreateCard setClicked={setClicked} setFlashcardMap={setFlashcardMap} index={index} topic={theme}/>}
                    <TitleContainer setClicked={setClicked} theme={theme} index={index}/>
                    <SubContainer flashcardMap={flashcardMap} index={index} />
                </ThemeContainerStyled>
            ))}
        </>
    )
}

export default ThemeContainer

