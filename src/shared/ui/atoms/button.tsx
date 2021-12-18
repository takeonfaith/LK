import React, { memo } from 'react'
import styled from 'styled-components'
import useTheme from '@utils/hooks/use-theme'
import Themes from '../colors'

const ButtonWrapper = styled.button<{
    theme: string
    text: boolean
    isChosen: boolean
    width?: string
    background?: string
    whiteText?: boolean
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    color: ${({ whiteText }) => (whiteText ? '#fff' : 'var(--text)')};
    background: ${({ isChosen, background }) => (isChosen ? 'var(--blue)' : background ?? 'var(--search)')};
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.2s transform;
    width: ${({ width }) => (width ? width : 'fit-content')};

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
    text?: string
    onClick: (event: any) => void
    isChosen?: boolean
    width?: string
    background?: string
    whiteText?: boolean
}

const Button = ({ icon, text, onClick, isChosen = false, width, background, whiteText = false }: Props) => {
    const { theme } = useTheme()
    return (
        <ButtonWrapper
            text={!!text}
            onClick={onClick}
            theme={Themes[theme]}
            isChosen={isChosen}
            width={width}
            background={background}
            whiteText={whiteText}
        >
            {!!icon && icon}
            <span>{text}</span>
        </ButtonWrapper>
    )
}

export default memo(Button)
