import { getSubjectIcon } from '@features/acad-performance/lib/get-subject-icon'
import { TimeIntervalColor } from '@shared/api/model'
import { Colors } from '@shared/constants'
import { TimesEvents } from '@shared/ui/calendar/calendars/day/ui/times-events'
import { Button } from '@ui/atoms'
import { DotPages } from '@ui/molecules'
import limitNumber from '@utils/limit-number'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useModal } from 'widgets'
import { WhatsNewTemplate } from './ui'

const WhatsNewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    @media (min-width: 1001px) {
        width: 400px;
        min-height: 350px;
    }

    .content {
        height: 100%;
    }

    .buttons {
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 10px;

        & > * + * {
            margin-left: 10px;
        }
    }
`

const NewScheduleStyled = styled.div`
    --time-width: 55px;
    height: 300px;
    width: 100%;
`

const NewSchedule = () => {
    return (
        <NewScheduleStyled>
            <TimesEvents
                scale={1.35}
                weekday={1}
                events={[
                    {
                        title: 'Нечеткое моделирование',
                        duration: 90,
                        startTime: '16:10',
                        startDate: new Date('September 1, 2023'),
                        endDate: null,
                        color: TimeIntervalColor['16:10 - 17:40'],
                        icon: getSubjectIcon('Нечеткое моделирование'),
                        place: 'Прянишникова',
                        rooms: ['Пр2202'],
                        weekday: 'Ср',
                        people: ['Норин Владимир Павлович'],
                        dateInterval: '1 сен - 30 окт',
                    },
                    {
                        title: 'Математика',
                        duration: 90,
                        startTime: '17:50',
                        startDate: new Date('September 1, 2023'),
                        endDate: null,
                        color: TimeIntervalColor['17:50 - 19:20'],
                        icon: getSubjectIcon('Математика'),
                        place: 'Прянишникова',
                        rooms: ['Пр2202'],
                        weekday: 'Ср',
                        people: ['Норин Владимир Павлович'],
                        dateInterval: '1 сен - 30 окт',
                    },
                ]}
                interval={[16, 19]}
                currentDay={0}
                shift={16 * 60}
                onEventClick={() => null}
            />
        </NewScheduleStyled>
    )
}

const WhatsNew = () => {
    const [currentPage, setCurrentPage] = useState(0)

    const { close } = useModal()
    const pages = [
        <WhatsNewTemplate
            key={'schedule'}
            text="Стало проще видеть свое расписание целиком"
            image={{
                title: 'Новое расписание! В виде календаря',
                component: <NewSchedule />,
            }}
        />,
    ]

    return (
        <WhatsNewWrapper>
            <div className="content">{pages[currentPage]}</div>
            <DotPages amount={pages.length} current={currentPage} />
            <div className="buttons">
                <Button
                    onClick={() => setCurrentPage((prev) => limitNumber(prev - 1, pages.length - 1))}
                    text="Назад"
                    width="100%"
                    isActive={currentPage !== 0}
                />
                {currentPage === pages.length - 1 ? (
                    <Button
                        onClick={close}
                        text="Готово"
                        width="100%"
                        background={Colors.blue.light1}
                        textColor="#fff"
                    />
                ) : (
                    <Button
                        onClick={() => setCurrentPage((prev) => limitNumber(prev + 1, pages.length - 1))}
                        text="Далее"
                        width="100%"
                    />
                )}
            </div>
        </WhatsNewWrapper>
    )
}

export default WhatsNew
