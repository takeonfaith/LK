import React, { memo } from 'react'
import styled from 'styled-components'

const LinkButtonWrapper = styled.a<{
    text: boolean
    isChosen: boolean
    width?: string
    background?: string
    textColor?: string
    align?: 'left' | 'center' | 'right'
}>`
    display: flex;
    align-items: center;
    justify-content: ${({ align }) => align ?? 'center'};
    border: none;
    color: ${({ textColor }) => (textColor ? textColor : 'var(--text)')};
    background: ${({ isChosen, background }) => (isChosen ? 'var(--blue)' : background ?? 'var(--search)')};
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.2s transform;
    width: ${({ width }) => (width ? width : 'fit-content')};
    text-decoration: none;
    font-size: 0.8em;

    button {
        outline: none;
    }

    &:focus-visible {
        outline: 4px solid var(--almostTransparentOpposite);
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    &:active {
        transform: scale(0.95);
    }

    svg {
        margin-right: ${({ text }) => (text ? '7px' : '0')};
        width: 15px;
        height: 15px;
    }

    @media (max-width: 1000px) {
        font-size: 12px;
        height: 36px;

        svg {
            width: 14px;
            height: 14px;
        }
    }
`

interface Props {
    icon?: JSX.Element
    text?: React.ReactNode | string
    onClick: (event: any) => void
    isChosen?: boolean
    width?: string
    background?: string
    textColor?: string
    align?: 'left' | 'center' | 'right'

    href: string
}

const LinkButton = ({ icon, text, onClick, width, background, textColor, align, href, isChosen = false }: Props) => {
    return (
        <LinkButtonWrapper
            text={!!text}
            onClick={onClick}
            isChosen={isChosen}
            width={width}
            background={background}
            textColor={textColor}
            href={href}
            align={align}
        >
            {!!icon && icon}
            <span>{text}</span>
        </LinkButtonWrapper>
    )
}

export default memo(LinkButton)
