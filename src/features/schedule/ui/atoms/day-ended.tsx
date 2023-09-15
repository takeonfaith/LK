import { scheduleModel } from '@entities/schedule'
import { AnimatedCheck, Title } from '@ui/atoms'
import React from 'react'
import styled from 'styled-components'
import { useModal } from 'widgets'

const DayEndedWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 144px;
    background: var(--schedule);
    border-radius: var(--brLight);
    row-gap: 10px;
`

const DayEnded = () => {
    const { open } = useModal()
    const { data } = scheduleModel.selectors.useSchedule()

    return (
        <DayEndedWrapper>
            <AnimatedCheck size={'38px'} />
            <Title size={4}>Учебный день завершился</Title>
            {/* {!!data.schedule?.week && (
                <Button
                    text="Посмотреть следующий"
                    onClick={() =>
                        open(
                            <DaySchedule
                                lessons={data.schedule?.week?.[getTomorrow()].lessons ?? []}
                                topInfo={displayTopInfo(data.schedule?.week, getTomorrow())}
                                weekDay={WeekDays[getTomorrow()].full}
                            />,
                        )
                    }
                    textColor="var(--blue)"
                    background="transparent"
                />
            )} */}
        </DayEndedWrapper>
    )
}

export default DayEnded
