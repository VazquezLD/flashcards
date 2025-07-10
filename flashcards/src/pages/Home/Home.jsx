import { useState } from "react";
import Layout from "../../components/Layout";
import InputCardName from "./InputCardName";
import ThemeContainer from "./ThemeContainer";
import styled from "styled-components";
import ButtonAcept from "./ButtonAcept";

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

    const [themes, setThemes] = useState([])
    const [deleteTheme, setDeleteTheme] = useState(false)

    return(
        <Layout>
            <HomeStyled>
                <span style={{fontWeight:600, fontSize:20}}>Bienvenido! Aquí se guardan tus conjuntos de Flashcards</span>
                <ButtonAcept text='Nuevo Tema'/>
                <InputCardName placeholder="Buscar Temas"/>
                <ThemeContainer/>
            </HomeStyled>
        </Layout>
    )
}