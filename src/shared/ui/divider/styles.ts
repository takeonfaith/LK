import styled from 'styled-components'
import { DividerProps } from '.'

export const DividerLine = styled.div<DividerProps>`
    width: ${({ direction }) => (direction !== 'horizontal' ? '90%' : '0.5px')};
    height: ${({ direction }) => (direction !== 'horizontal' ? '0.5px' : '90%')};
    background: var(--almostTransparentOpposite);
    margin: ${({ margin }) => margin ?? '5px auto'};
`
