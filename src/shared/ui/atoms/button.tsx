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
    direction: 'horizontal' | 'vertical'
    align?: 'left' | 'center' | 'right'
    isActive: boolean
    fixedInMobile?: boolean
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
    flex-direction: ${({ direction }) => direction === 'vertical' && 'column'};
    opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};

    &:focus {
        outline: 4px solid var(--almostTransparentOpposite);
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    &:isactive {
        transform: scale(0.95);
    }

    &:hover {
        background: ${({ hoverBackground, isChosen, background }) =>
            hoverBackground ?? (isChosen ? 'var(--blue)' : background ?? 'var(--search)')};
    }

    svg {
        margin-right: ${({ text, direction }) => (text && direction === 'horizontal' ? '7px' : '0')};
        width: ${({ direction, text }) => (direction === 'vertical' || !text ? '20px' : '15px')};
        min-width: ${({ direction, text }) => (direction === 'vertical' || !text ? '20px' : '15px')};
        height: ${({ direction, text }) => (direction === 'vertical' || !text ? '20px' : '15px')};
        margin-bottom: ${({ direction }) => direction === 'vertical' && '4px'};
    }

    @media (max-width: 1000px) {
        font-size: 12px;
        height: 36px;
        position: ${({ fixedInMobile }) => fixedInMobile && 'absolute'};
        z-index: ${({ fixedInMobile }) => fixedInMobile && '5'};
        bottom: 10px;
        right: 10px;

        svg {
            width: ${({ direction }) => (direction === 'vertical' ? '30px' : '14px')};
            min-width: ${({ direction }) => (direction === 'vertical' ? '30px' : '14px')};
            height: ${({ direction }) => (direction === 'vertical' ? '30px' : '14px')};
            margin-right: ${({ shrinkTextInMobile, text, direction }) =>
                shrinkTextInMobile || direction === 'vertical' || !text ? '0px' : '7px'};
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
    fixedInMobile?: boolean
    hoverBackground?: string
    align?: 'left' | 'center' | 'right'
    direction?: 'horizontal' | 'vertical'
    isActive?: boolean
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
    align,
    fixedInMobile,
    isChosen = false,
    direction = 'horizontal',
    shrinkTextInMobile = false,
    isActive = true,
    ...restProps
}: Props) => {
    return (
        <ButtonWrapper
            text={!!text}
            onClick={(e) => isActive && onClick(e)}
            isChosen={isChosen}
            width={width}
            background={background}
            textColor={textColor}
            shrinkTextInMobile={shrinkTextInMobile}
            hoverBackground={hoverBackground}
            align={align}
            direction={direction}
            isActive={isActive}
            fixedInMobile={fixedInMobile}
            {...restProps}
        >
            {!!icon && icon}
            <span>{text}</span>
        </ButtonWrapper>
    )
}

export default memo(Button)
