import { Direction } from '@ui/types'
import styled from 'styled-components'

export type DividerProps = {
    direction?: Direction
    margin?: string
    width?: string
}

export const Divider = styled.div<DividerProps>`
    width: ${({ direction = 'horizontal', width }) => (direction === 'horizontal' ? width ?? '90%' : '0.5px')};
    height: ${({ direction = 'horizontal', width }) => (direction === 'horizontal' ? '0.5px' : width ?? '90%')};
    min-height: ${({ direction = 'horizontal', width }) => (direction === 'horizontal' ? '0.5px' : width ?? '90%')};
    background: var(--almostTransparentOpposite);
    margin: ${({ margin }) => margin ?? '5px auto'};
`
