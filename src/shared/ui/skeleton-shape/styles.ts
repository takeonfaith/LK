import { Shape } from '@ui/types'
import styled from 'styled-components'

export const SkeletonShapeWrapper = styled.div<{
    shape: Shape
    size: { width: string; height: string }
    margin: string
    pulse: boolean
}>`
    width: ${({ size }) => (size ? size.width : '100px')};
    min-width: ${({ size }) => (size ? size.width : '100px')};
    height: ${({ size, shape }) => (size ? (shape === 'circle' ? size.width : size.height) : '20px')};
    border-radius: ${({ shape }) => (shape === 'circle' ? '100%' : '10px')};
    background: var(--almostTransparent);
    margin: ${({ margin }) => margin};
    animation: ${({ pulse }) => pulse && 'skeleton 1s infinite'};

    @keyframes skeleton {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.6;
        }
        100% {
            opacity: 1;
        }
    }
`
