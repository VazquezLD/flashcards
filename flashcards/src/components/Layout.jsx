import styled from "styled-components";

const LayoutStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    width: 100vw;
    margin-top: 90px;
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