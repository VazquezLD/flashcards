import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const HeaderStyled = styled.nav`
    width: 100%;
    height: 90px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 0;
    color: black;
    justify-content: space-between;
    top: 0;
    position: fixed;
    box-shadow: -2px 7px 56px -33px rgba(0,0,0,0.3);
    -webkit-box-shadow: -2px 7px 56px -33px rgba(0,0,0,0.3);
    -moz-box-shadow: -2px 7px 56px -33px rgba(0,0,0,0.3);
    background-color: white;
    & ul{
        list-style: none;
        display: flex;
        align-items: center;
        gap: 40px;
        justify-content: center;
        padding-right: 200px;
    }
    & span{
        height: 100%;
        display: flex;
        align-items: center;
        padding-left: 30px;
        font-size: 22px;
        font-weight: 800;
    }
    & a{
        text-decoration: none;
        color: black;
        font-weight: 500;
    }
`

const Header = () => {
    return(
        <>
            <HeaderStyled>
                <span>FlashMIND</span>
                <ul>
                    <li><NavLink to={'/'}>inicio</NavLink></li>
                    <li><NavLink to={'flashcards'}>Flashcards</NavLink></li>
                    <li><NavLink to={'flashcard'}>Flashcard</NavLink></li>
                    <li><NavLink to={'profile'}>Perfil</NavLink></li>
                </ul>
            </HeaderStyled>
        </>
    )
}

export default Header