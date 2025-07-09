import Layout from "../../components/Layout";
import InputCardName from "./InputCardName";
import ThemeContainer from "./ThemeContainer";

export const Home = () => {
    return(
        <Layout>
            <span style={{fontWeight:600, fontSize:20}}>Bienvenido! Aquí se guardan tus conjuntos de Flashcards</span>
            <InputCardName placeholder="Buscar Temas"/>
            <ThemeContainer/>
        </Layout>
    )
}