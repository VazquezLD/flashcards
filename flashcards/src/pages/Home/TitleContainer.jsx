import styled from "styled-components";
import { IoTrashOutline } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useState } from "react";

const TitleStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;

  & span {
    width: 100%;
  }

  & div {
    display: flex;
    gap: 5px;
  }

  & button {
    background-color: transparent;
    border: none;
    font-size: 20px;
    color: black;
    &:hover {
      color: gray;
      cursor: pointer;
    }
  }

  .editable-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
    max-width: 100%;
    outline: none;
    border-bottom: 1px solid #ccc;
    cursor: text;
  }
`

const TitleContainer = ({ setClicked, title='Tema 1' }) => {

  const handleKeyDown = (e) => {
    if (e.key === "Enter") e.preventDefault()
  }

  return (
    <TitleStyled>
      <span
        contentEditable
        suppressContentEditableWarning
        className="editable-title"
        onKeyDown={handleKeyDown}
      >
        {title}
      </span>
      <div>
        <button onClick={() => setClicked(true)}>
          <IoIosAdd />
        </button>
        <button>
          <IoTrashOutline />
        </button>
        <button>
          <HiOutlineDotsVertical />
        </button>
      </div>
    </TitleStyled>
  )
}

export default TitleContainer;
