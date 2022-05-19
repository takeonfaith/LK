import { Title } from '@ui/atoms'
import { Align, Direction } from '@ui/types'
import React from 'react'
import styled from 'styled-components'

const ButtonsListWrapper = styled.div<{
    direction: Direction
    width: string
    maxWidth: string
    background: string
    padding: string
    align: Align
}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: ${({ width }) => width};
    max-width: ${({ maxWidth }) => maxWidth};
    background: ${({ background }) => background};
    padding: ${({ padding }) => padding};
    border-radius: 12px;

    .list {
        display: flex;
        flex-direction: ${({ direction }) => (direction === 'vertical' ? 'column' : 'row')};
        align-items: center;
        justify-content: ${({ align }) => align ?? 'center'};
        gap: 5px;
        flex-wrap: wrap;
    }
`

interface Props {
    condition: boolean
    direction: 'horizontal' | 'vertical'
    align?: Align
    children: React.ReactNode[] | React.ReactNode
    width?: string
    maxWidth?: string
    background?: string
    padding?: string
    title?: string
}

const ButtonsList = ({
    condition,
    direction,
    children,
    title,
    align = 'left',
    background = 'transparent',
    padding = '0',
    width = '100%',
    maxWidth = '100%',
}: Props) => {
    return condition ? (
        <ButtonsListWrapper
            width={width}
            maxWidth={maxWidth}
            direction={direction}
            padding={padding}
            background={background}
            align={align}
        >
            {!!title && (
                <Title size={4} align="left" bottomGap>
                    {title}
                </Title>
            )}
            <div className="list">{children}</div>
        </ButtonsListWrapper>
    ) : null
}

export default ButtonsList
