import styled from 'styled-components'

export const ImageWrapper = styled.img<{ borderRadius?: string }>`
    border-radius: ${({ borderRadius }) => borderRadius ?? '0px'};
`
