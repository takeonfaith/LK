import { Colors } from '@consts'
import displayTopInfoSession from '@features/schedule/lib/display-top-info-session'
import calcTimeLeft from '@utils/calc-time-left'
import React from 'react'
import styled from 'styled-components'

const getDaysColor = (day: string) => {
    const daysLeft = calcTimeLeft(day, 'days')
    if (daysLeft < 0) return Colors.blue.main
    if (daysLeft < 1) return Colors.pink.main
    if (daysLeft < 2) return Colors.red.main
    if (daysLeft < 5) return Colors.yellow.main
    return Colors.green.main
}

const DaysTillExamWrapper = styled.div<{ day: string }>`
    color: ${({ day }) => getDaysColor(day)};
    font-weight: 600;
    white-space: nowrap;
`

interface Props {
    day: string
}

const DaysTillExam = ({ day }: Props) => {
    return <DaysTillExamWrapper day={day}>{displayTopInfoSession(day)}</DaysTillExamWrapper>
}

export default DaysTillExam
