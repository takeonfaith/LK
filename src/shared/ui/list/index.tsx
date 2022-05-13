import React from 'react'
import { Title } from '@ui/title'
import { Direction } from '@ui/types'
import styled from 'styled-components'

interface StyleProps {
    direction?: Direction
    width?: string
    gap?: string
}

export const ListWrapper = styled.div<StyleProps>`
    display: flex;
    flex-direction: ${({ direction }) => (direction ?? 'vertical') === 'vertical' && 'column'};
    align-items: center;
    justify-content: flex-start;
    gap: ${({ gap }) => gap ?? '5px'};
    width: ${({ width }) => width ?? '100%'};
    min-width: ${({ width }) => width ?? '100%'};
    color: var(--text);
`

type Props = StyleProps & {
    title?: string
    children: ChildrenType
}

const List = ({ title, children, direction, gap, width }: Props) => {
    return (
        <div>
            <Title size={4} align="left" bottomGap visible={!!title}>
                {title}
            </Title>
            <ListWrapper direction={direction} gap={gap} width={width}>
                {children}
            </ListWrapper>
        </div>
    )
}

export default List
