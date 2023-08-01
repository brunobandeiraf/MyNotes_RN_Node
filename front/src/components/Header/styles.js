import styled from 'styled-components'

export const Container = styled.head`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px; // linha embaixo
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between; // um de cada lado

    padding: 0 80px;

    background: red;
`