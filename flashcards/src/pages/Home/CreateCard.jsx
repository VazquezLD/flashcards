import styled from "styled-components";
import FormStructure from "../../components/FormStructure";

const CreateCardStyled = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    background-color: #ffffff;
    padding-top: 100px;
    top: 0;
    margin: 0;
    width: 100vw;
    overflow-y: scroll;
`

const CreateCard = ({setClicked, setFlashcardMap, index, topic}) => {
    return(
        <CreateCardStyled>
                <FormStructure index={index}
                title={'Ingresa los datos para crear una flashcard'} 
                topic={topic} setClicked={setClicked}
                setFlashcardMap={setFlashcardMap}
                />
        </CreateCardStyled>
    )
}

export default CreateCard