import styled from 'styled-components'

export const Container = styled.textarea`
    width: 100%;
    height: 150px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    border: none;
    resize: none; // usuário não consegue redefinir tamanho

    margin-bottom: 8px;
    border-radius: 10px;
    padding: 16px;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
`;