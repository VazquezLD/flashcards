import styled from "styled-components";

const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: 200px;
    width: 250px;
    transition: all 0.3s ease;
    overflow: hidden;
    border-radius: 20px;
    border: 1px solid #0000001a;
    & span{
        font-weight: 400;
        padding-left: 10px;
    }
    & div{
        width: 100%;
        height: 60%;
        background-color: #dadada;
        border-radius: 10px;
    }
    &:hover{
        transform: translateY(-5px);
        cursor: pointer;
    }
`

const FlashCard = ({ flashcards }) => {
  return (
    <>
      {flashcards.map((card, index) => (
        <CardStyled key={index}>
          <div style={{ backgroundColor: card.color }}></div>
          <span>{card.title}</span>
        </CardStyled>
      ))}
    </>
  )
}


export default FlashCard