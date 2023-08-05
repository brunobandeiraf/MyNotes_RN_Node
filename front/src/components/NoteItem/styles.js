import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    // Se for novo (isNew) será transparent, se não será 900
    background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_900};
    color: ${({ theme}) => theme.COLORS.GRAY_300};

    // borda condicional
    // se for novo - 1px dashed
    // do contrário, sem borda
    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};
    
    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;

    > button {
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({ theme}) => theme.COLORS.RED};
    }
    .button-add {
        color: ${({ theme}) => theme.COLORS.ORANGE};
    }

    > input {
        height: 56px;
        width: 100%;
        
        padding: 12px;

        color: ${({ theme}) => theme.COLORS.WHITE};
        background: transparent;

        border: none;

        &::placeholder{
            ${({ theme}) => theme.COLORS.GRAY_300};
        }
    }
`;