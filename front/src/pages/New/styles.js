import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto; //105 para cabeçalho e restante para o corpo
    grid-template-areas: 
    "header"
    "content";

    //somente o main participada da rolagem e header fica fixo
    > main{
        grid-area: content;
        overflow-y: auto; 
    }

    .tags {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap; //não caber na linha, joga pra baixo
    }
`;

export const Form = styled.form`
    max-width: 550px;
    margin: 38px auto;

    > header {
        display: flex;
        align-items: center;
        justify-content: space-between; // um para cada lado

        margin-bottom: 36px;

        button {
            font-size: 20px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }
`;