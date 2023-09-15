import { IColorPalette } from '@shared/constants'
import useTheme from '@shared/lib/hooks/use-theme'
import React from 'react'
import styled from 'styled-components'

const NextSubjectWrapper = styled.div<{ background: string }>`
    border-radius: var(--brSemi);
    background: ${({ background }) => background};
    color: ${({ color }) => color};
    padding: 3px 8px;
    white-space: nowrap;
    font-size: 0.65rem;
    font-weight: 500;
`

interface Props {
    timeLeft: number
    isNext: boolean
    color: IColorPalette
    isCurrentEvent: boolean
}

const NextSubject = ({ timeLeft, isNext, color, isCurrentEvent }: Props) => {
    const hours = Math.floor(timeLeft / 60)
    const { theme } = useTheme()
    const textColor = theme === 'light' ? color.dark3 : color.light3
    const background = theme === 'light' ? color.transparent3 : color.transparent3

    if (!isNext && !isCurrentEvent) return null

    if (isCurrentEvent)
        return (
            <NextSubjectWrapper background={background} color={textColor}>
                Сейчас
            </NextSubjectWrapper>
        )

    return (
        <NextSubjectWrapper background={background} color={textColor}>
            через {!!hours && hours + 'ч.'} {timeLeft % 60}мин.
        </NextSubjectWrapper>
    )
}

export default NextSubject
