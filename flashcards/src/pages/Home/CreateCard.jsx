import styled from "styled-components";
import FormStructure from "../../components/FormStructure";

const CreateCardStyled = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    background-color: #ffffff;
    width: 100vw;
    height: 100%;
`

const CreateCard = ({setClicked, setFlashcards}) => {
    return(
        <CreateCardStyled>
                <FormStructure title={'Ingresa los datos para crear una flashcard'} topic="" setClicked={setClicked} setFlashcards={setFlashcards}/>
        </CreateCardStyled>
    )
}

export default CreateCard