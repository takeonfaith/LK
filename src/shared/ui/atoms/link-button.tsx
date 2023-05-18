import React from 'react'
import styled from 'styled-components'
import { Align } from '../types'

interface Props {
    icon?: JSX.Element
    text?: React.ReactNode | string
    onClick?: (event: any) => void
    isChosen?: boolean
    align?: Align
    isActive?: boolean
    href: string
}

export const LinkButton = ({ icon, text, onClick, align, href, isChosen = false, isActive = true }: Props) => {
    return (
        <LinkButtonWrapper
            text={!!text}
            onClick={(e) => isActive && onClick && onClick(e)}
            isChosen={isChosen}
            href={href}
            align={align}
            isActive={isActive}
        >
            {!!icon && icon}
            <span>{text}</span>
        </LinkButtonWrapper>
    )
}

const LinkButtonWrapper = styled.a<{
    text: boolean
    isChosen: boolean
    align?: Align
    isActive: boolean
}>`
    display: flex;
    align-items: center;
    justify-content: ${({ align }) => align ?? 'center'};
    border: none;
    color: var(--text);
    background: ${({ isChosen }) => (isChosen ? 'var(--blue)' : 'var(--search)')};
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.2s transform;
    width: 'fit-content';
    text-decoration: none;
    font-size: 0.8em;
    height: 40px;
    min-height: 40px;
    opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
    pointer-events: ${({ isActive }) => !isActive && 'none'};

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
