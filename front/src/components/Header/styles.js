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

export const Profile = styled.div`
    display: flex;
    align-items: center;

    // Alterar a imagem de dentro da div
    // div > img
    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%; // imagem ficar redonda
    }

    > div {
        display: flex;
        flex-direction: column; // uma ao lado da outra
        margin-left: 16px;
        line-height: 24px;

        // div > div > span
        span {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_100}
        }
        // div > div > strong
        strong {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.WHITE}
        }
    }
`