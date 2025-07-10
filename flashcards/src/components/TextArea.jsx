import styled from "styled-components";

const TextAreaStyled = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #cee1ec;
  resize: none; 
  overflow-wrap: break-word;
  word-wrap: break-word;
  box-sizing: border-box;
  color: #183774;
  font-size: 16px;
  font-weight: 300;

  &::placeholder {
    color: #183774;
    font-weight: 300;
    font-size: 16px;
    text-align: left;
  }

  &:focus {
    outline: none;
    background-color: #b8d6f0;
  }
`
const TextAreaComponent = ({placeholder='none'}) => {
    return(
        <TextAreaStyled placeholder={placeholder}/>
    )
}


export default TextAreaComponent