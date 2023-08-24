import { Align, Direction } from '@ui/types'
import React, { HtmlHTMLAttributes } from 'react'
import { ButtonWrapper } from './styles'
import { popUpMessageModel } from '@entities/pop-up-message'

type BaseProps = HtmlHTMLAttributes<HTMLButtonElement>

export type ButtonProps = BaseProps & {
    icon?: JSX.Element
    text?: React.ReactNode | string
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    isChosen?: boolean
    width?: string
    minWidth?: string
    background?: string
    textColor?: string
    shrinkTextInMobile?: boolean
    hoverBackground?: string
    padding?: string
    align?: Align
    direction?: Direction
    isActive?: boolean
    fixedInMobile?: boolean
    height?: string
    notActiveClickMessage?: string
    flipped?: boolean
}

export function Button(props: ButtonProps) {
    const {
        icon,
        text,
        onClick,
        width,
        minWidth,
        background,
        textColor,
        hoverBackground,
        align,
        isChosen,
        padding,
        shrinkTextInMobile,
        fixedInMobile,
        direction = 'horizontal',
        isActive = true,
        height,
        notActiveClickMessage,
        flipped,
        ...restProps
    } = props

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (isActive) onClick?.(event)
        else if (notActiveClickMessage)
            popUpMessageModel.events.evokePopUpMessage({ type: 'failure', message: notActiveClickMessage, time: 10000 })
    }

    return (
        <ButtonWrapper
            text={!!text}
            onClick={handleClick}
            isChosen={isChosen}
            width={width}
            minWidth={minWidth}
            background={background}
            padding={padding}
            textColor={textColor}
            shrinkTextInMobile={shrinkTextInMobile}
            hoverBackground={hoverBackground}
            align={align}
            direction={direction}
            isActive={isActive}
            fixedInMobile={fixedInMobile}
            height={height}
            flipped={flipped}
            {...restProps}
        >
            {!!icon && <div className="icon">{icon}</div>}
            <span className="text">{text}</span>
        </ButtonWrapper>
    )
}
