import styled from 'styled-components'

export const DividerLine = styled.div<{ margin?: string }>`
    width: 90%;
    height: 0.5px;
    background: var(--almostTransparentOpposite);
    margin: ${({ margin }) => margin ?? '5px auto'};
`
