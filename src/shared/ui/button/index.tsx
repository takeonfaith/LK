import { Align, Direction } from '@ui/types'
import React, { HtmlHTMLAttributes } from 'react'
import { ButtonWrapper } from './styles'

type BaseProps = HtmlHTMLAttributes<HTMLButtonElement>

export type ButtonProps = BaseProps & {
    icon?: JSX.Element
    text?: React.ReactNode | string
    onClick?: (event: any) => void
    isChosen?: boolean
    width?: string
    background?: string
    textColor?: string
    shrinkTextInMobile?: boolean
    hoverBackground?: string
    align?: Align
    direction?: Direction
    isActive?: boolean
}

export function Button(props: ButtonProps) {
    const {
        icon,
        text,
        onClick,
        width,
        background,
        textColor,
        hoverBackground,
        align,
        isChosen,
        shrinkTextInMobile,
        direction = 'horizontal',
        isActive = true,
        ...restProps
    } = props

    return (
        <ButtonWrapper
            text={!!text}
            onClick={(e) => isActive && onClick?.(e)}
            isChosen={isChosen}
            width={width}
            background={background}
            textColor={textColor}
            shrinkTextInMobile={shrinkTextInMobile}
            hoverBackground={hoverBackground}
            align={align}
            direction={direction}
            isActive={isActive}
            {...restProps}
        >
            {!!icon && icon}
            <span>{text}</span>
        </ButtonWrapper>
    )
}
