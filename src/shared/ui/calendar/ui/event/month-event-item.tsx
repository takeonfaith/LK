import React from 'react'
import { DayCalendarEvent } from '../../types'
import { TimeIndicator } from '@features/schedule/ui/subject/time-indicator'
import Flex from '@shared/ui/flex'
import styled from 'styled-components'
import useTheme from '@shared/lib/hooks/use-theme'
import Subtext from '@shared/ui/subtext'

const MonthEventItemStyled = styled(Flex)<{ textColor: string; background: string }>`
    padding: 4px;
    border-radius: 4px;
    /* background: ${({ background }) => background}; */
    /* border: 2px solid ${({ background }) => background}; */

    cursor: pointer;

    &:hover {
        filter: brightness(0.92);
    }
`

const MonthEventItemTitle = styled.div<{ textColor: string }>`
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.8rem;
    opacity: 0.8;
    color: ${({ textColor }) => textColor};
`

type Props = DayCalendarEvent & {
    onClick?: (event: DayCalendarEvent) => void
}

export const MonthEventItem = (props: Props) => {
    const { title, color, onClick, startTime } = props
    const { theme } = useTheme()
    const textColor = theme === 'light' ? color.dark3 : color.light3
    const background = theme === 'light' ? color.transparent3 : color.transparent2

    const handleClick = () => onClick?.(props)

    return (
        <MonthEventItemStyled textColor={textColor} background={background} gap="6px" onClick={handleClick}>
            <TimeIndicator color={color} />
            <MonthEventItemTitle textColor={textColor}>{title}</MonthEventItemTitle>
            <Subtext fontSize="0.7rem">{startTime}</Subtext>
        </MonthEventItemStyled>
    )
}
