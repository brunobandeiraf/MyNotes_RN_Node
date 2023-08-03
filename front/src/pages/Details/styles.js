import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto; // 1º 105px e o restante total
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: scroll; // Quando não couber mais na vertical, aparece o scroll
        padding: 64px 0;
    }
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

export const Content = styled.div`
    max-width: 550px;
    margin: 0 auto; // conteúdo para o centro
    
    display: flex;
    flex-direction: column;

    > button:first-child {
        align-self: end; // somente ele vai para o canto
    }

    > h1 {
        font-size: 36px;
        font-weight: 500;
        padding-top: 64px;
    }

    > p {
        font-size: 16px;
        margin-top: 16px;
        text-align: justify; // texto justificado
    }
`