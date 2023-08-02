import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto; // 1º 105px e o restante total
    grid-template-areas: 
    "header"
    "content";
`

export const Links = styled.ul`
    list-style: none;

    > li {
        margin-top: 12px;

        // ul > li > a
        a {
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`