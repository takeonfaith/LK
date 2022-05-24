import React from 'react'
import { Title } from '@ui/title'
import { Direction } from '@ui/types'
import styled from 'styled-components'

interface StyleProps {
    direction?: Direction
    width?: string
    gap?: string
    justifyContent?: string
    alignItems?: string
    padding?: string
    fontSize?: string
}

export const ListWrapper = styled.div<StyleProps>`
    display: flex;
    flex-direction: ${({ direction }) => (direction ?? 'vertical') === 'vertical' && 'column'};
    align-items: center;
    justify-content: ${({ justifyContent }) => justifyContent ?? 'flex-start'};
    align-items: ${({ alignItems }) => alignItems ?? 'center'};
    gap: ${({ gap }) => gap ?? '5px'};
    width: ${({ width }) => width ?? '100%'};
    min-width: ${({ width }) => width ?? '100%'};
    padding: ${({ padding }) => padding ?? '0'};
    color: var(--text);
    font-size: ${({ fontSize }) => fontSize ?? '1em'};

    overflow-x: auto;
`

type Props = StyleProps & {
    title?: string
    children: ChildrenType
}

const List = ({ title, children, direction, gap, width, padding, fontSize }: Props) => {
    return (
        <div>
            <Title size={4} align="left" bottomGap visible={!!title}>
                {title}
            </Title>
            <ListWrapper direction={direction} gap={gap} width={width} padding={padding} fontSize={fontSize}>
                {children}
            </ListWrapper>
        </div>
    )
}

export default List
