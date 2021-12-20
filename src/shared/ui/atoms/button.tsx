import React, { memo } from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button<{
    text: boolean
    isChosen: boolean
    width?: string
    background?: string
    textColor?: string
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    color: ${({ textColor }) => (textColor ? textColor : 'var(--text)')};
    background: ${({ isChosen, background }) => (isChosen ? 'var(--blue)' : background ?? 'var(--search)')};
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.2s transform;
    width: ${({ width }) => (width ? width : 'fit-content')};

    span a {
        text-decoration: none;
        color: ${({ textColor }) => (textColor ? textColor : 'var(--text)')};
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
}

const Button = ({ icon, text, onClick, width, background, textColor, isChosen = false }: Props) => {
    return (
        <ButtonWrapper
            text={!!text}
            onClick={onClick}
            isChosen={isChosen}
            width={width}
            background={background}
            textColor={textColor}
        >
            {!!icon && icon}
            <span>{text}</span>
        </ButtonWrapper>
    )
}

export default memo(Button)
