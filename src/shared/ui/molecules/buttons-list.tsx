import React from 'react'
import styled from 'styled-components'

const ButtonsListWrapper = styled.div<{ direction: 'horizontal' | 'vertical' }>`
    display: flex;
    flex-direction: ${({ direction }) => direction === 'vertical' && 'column'};
    width: 100%;
    gap: 5px;
`

interface Props {
    condition: boolean
    direction: 'horizontal' | 'vertical'
    children: React.ReactNode[] | React.ReactNode
}

const ButtonsList = ({ condition, direction, children }: Props) => {
    return condition ? <ButtonsListWrapper direction={direction}>{children}</ButtonsListWrapper> : null
}

export default ButtonsList
