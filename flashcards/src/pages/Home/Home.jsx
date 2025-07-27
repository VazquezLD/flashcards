import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import InputCardName from "./InputCardName";
import styled from "styled-components";
import ButtonAcept from "./ButtonAcept";
import { ThemesContainer } from "./ThemesContainer";

const HomeStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    gap: 40px;
`

export const Home = () => {
  const [flashcardMap, setFlashcardMap] = useState({})
  const [counter, setCounter] = useState(0)
  const [themes, setThemes] = useState([])

  useEffect(() => {
    const newThemeTitle = `Nuevo tema`
    setThemes(prevThemes => [...prevThemes, newThemeTitle])
    setFlashcardMap(prev => ({
      ...prev,
      [counter]: [],
    }))

  }, [counter])

  useEffect(() => {
    console.log('themes:', themes)
    console.log('flashcardMap:', flashcardMap)
  }, [themes, flashcardMap])

  return (
    <Layout>
      <HomeStyled>
        <span style={{ fontWeight: 600, fontSize: 20 }}>
          Bienvenido! Aquí se guardan tus conjuntos de Flashcards
        </span>
        <ButtonAcept text="Nuevo Tema" setCounter={setCounter} />
        <InputCardName placeholder="Buscar Temas" />
        <ThemesContainer themes={themes} setFlashcardMap={setFlashcardMap} flashcardMap={flashcardMap}/>
      </HomeStyled>
    </Layout>
  )
}

