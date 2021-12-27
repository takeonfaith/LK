import React from 'react'
import styled from 'styled-components'

const SkeletonShapeWrapper = styled.div<{
    shape: 'rect' | 'circle'
    size: { width: string; height: string }
    margin: string
}>`
    width: ${({ size }) => (size ? size.width : '100px')};
    min-width: ${({ size }) => (size ? size.width : '100px')};
    height: ${({ size, shape }) => (size ? (shape === 'circle' ? size.width : size.height) : '20px')};
    border-radius: ${({ shape }) => (shape === 'circle' ? '100%' : '10px')};
    background: var(--almostTransparent);
    margin: ${({ margin }) => margin};
    animation: skeleton 1s infinite;

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

interface Props {
    shape: 'rect' | 'circle'
    margin?: string
    size: { width: string; height: string }
}

const SkeletonShape = ({ shape, size, margin = '10px 0' }: Props) => {
    return <SkeletonShapeWrapper size={size} shape={shape} margin={margin}></SkeletonShapeWrapper>
}

export default SkeletonShape
