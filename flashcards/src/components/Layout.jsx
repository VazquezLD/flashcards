import styled from "styled-components";

const LayoutStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin-top: 90px;
    min-height: 100vh;
`

const Layout = ({children}) => {
    return(
        <LayoutStyled>
            {children}
        </LayoutStyled>
    )
}

export default Layout