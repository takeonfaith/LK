import { AnimatedCheck, Title } from '@ui/atoms'
import React from 'react'
import styled from 'styled-components'
import { ShowNextDayEventsButton } from '../show-next-day-events-button'

const DayEndedWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 144px;
    background: var(--block);
    border-radius: var(--brLight);
    row-gap: 10px;
`

const DayEnded = () => {
    return (
        <DayEndedWrapper>
            <AnimatedCheck size={'38px'} />
            <Title size={4}>Учебный день завершился</Title>
            <ShowNextDayEventsButton />
        </DayEndedWrapper>
    )
}

export default DayEnded
