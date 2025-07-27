import styled from "styled-components";
import FlashCard from '../../components/FlashCard'

const SubStyled = styled.div`
    display: grid;
    width: 100%;
    height: auto;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    padding-top: 30px;
    gap: 5px;
`

const SubContainer = ({flashcardMap, index}) => {

    return(
        <SubStyled>
            {flashcardMap[index].length === 0 && <span>No tienes flashcards aún...</span>}
            <FlashCard flashcardMap={flashcardMap} index={index}/>
        </SubStyled>
    )
}
export default SubContainer