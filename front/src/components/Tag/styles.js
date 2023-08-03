import styled from 'styled-components'

export const Container = styled.span`
    font-size: 12px;
    padding: 5px 14px;
    border-radius: 6px;
    margin-right: 6px;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
`