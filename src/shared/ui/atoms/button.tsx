import React, { memo } from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button<{
    text: boolean
    isChosen: boolean
    width?: string
    background?: string
    textColor?: string
    shrinkTextInMobile: boolean
    hoverBackground?: string
}>`
    display: flex;
    align-items: center;
    justify-content: center;
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

    &:focus {
        outline: 4px solid var(--almostTransparentOpposite);
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    &:active {
        transform: scale(0.95);
    }

    &:hover {
        background: ${({ hoverBackground, isChosen, background }) =>
            hoverBackground ?? (isChosen ? 'var(--blue)' : background ?? 'var(--search)')};
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
            margin-right: ${({ shrinkTextInMobile, text }) => (shrinkTextInMobile || !text ? '0px' : '7px')};
        }

        span {
            display: ${({ shrinkTextInMobile }) => (shrinkTextInMobile ? 'none' : 'flex')};
        }
    }
`

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    icon?: JSX.Element
    text?: React.ReactNode | string
    onClick: (event: any) => void
    isChosen?: boolean
    width?: string
    background?: string
    textColor?: string
    shrinkTextInMobile?: boolean
    hoverBackground?: string
    restProps?: any | unknown
}

const Button = ({
    icon,
    text,
    onClick,
    width,
    background,
    textColor,
    hoverBackground,
    isChosen = false,
    shrinkTextInMobile = false,
    ...restProps
}: Props) => {
    return (
        <ButtonWrapper
            text={!!text}
            onClick={onClick}
            isChosen={isChosen}
            width={width}
            background={background}
            textColor={textColor}
            shrinkTextInMobile={shrinkTextInMobile}
            hoverBackground={hoverBackground}
            {...restProps}
        >
            {!!icon && icon}
            <span>{text}</span>
        </ButtonWrapper>
    )
}

export default memo(Button)
