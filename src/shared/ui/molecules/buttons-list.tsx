import { Title } from '@ui/atoms'
import React from 'react'
import styled from 'styled-components'

const ButtonsListWrapper = styled.div<{
    direction: 'horizontal' | 'vertical'
    width: string
    maxWidth: string
    background: string
    padding: string
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
        flex-direction: ${({ direction }) => direction === 'vertical' && 'column'};
        justify-content: center;
        gap: 5px;
        flex-wrap: wrap;
    }
`

interface Props {
    condition: boolean
    direction: 'horizontal' | 'vertical'
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
