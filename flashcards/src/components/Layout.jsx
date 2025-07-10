import styled from "styled-components";

const LayoutStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 90px;
    width: 100vw;
    height: 100vh;
    gap: 50px;
`

const Layout = ({children}) => {
    return(
        <LayoutStyled>
            {children}
        </LayoutStyled>
    )
}

export default Layout