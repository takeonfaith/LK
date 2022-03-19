import { IModules, ISchedule, ViewType } from '@api/model'
import { scheduleModel } from '@entities/schedule'
import getSchedule from '@entities/schedule/lib/get-schedule'
import { userModel } from '@entities/user'
import getSessionStats from '@features/schedule/lib/get-session-stats'
import {
    ScheduleViewButtonsList,
    TeacherScheduleIndicator,
    WeekDayButtonsList,
    WeekSchedule,
} from '@features/schedule/ui'
import ExamStats from '@features/schedule/ui/atoms/exam-stats'
import SessionSchedule from '@features/schedule/ui/organisms/session-schedule'
import { Wrapper } from '@ui/atoms'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useRouteMatch } from 'react-router'
import styled from 'styled-components'
import { Slider } from 'widgets'

const SchedulePageContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;

    .slider-wrapper {
        width: 100%;
        max-width: 600px;
    }

    .buttons-and-search {
        display: flex;
        align-items: center;
        column-gap: 10px;
    }

    @media (max-width: 1000px) {
        row-gap: 15px;
    }
`

interface Props {
    teacherName?: string
    data: ISchedule
    loading: boolean
    error: string | null
}

const TemplateSchedule = ({ teacherName, data, loading, error }: Props) => {
    const { schedule, currentModule, view } = data
    const {
        data: { user },
    } = userModel.selectors.useUser()

    const wrapperRef = useRef<HTMLDivElement>(null)

    const pages = useMemo(() => {
        return (
            !!schedule && [
                <WeekSchedule view={view} wrapperRef={wrapperRef} weekSchedule={schedule['0']} key={0} />,
                <WeekSchedule view={view} wrapperRef={wrapperRef} weekSchedule={schedule['1']} key={1} />,
                <React.Fragment key={2}>
                    <ExamStats {...getSessionStats(schedule['2'])} />
                    <SessionSchedule view={view} wrapperRef={wrapperRef} weekSchedule={schedule['2']} />
                </React.Fragment>,
            ]
        )
    }, [schedule, view])

    return (
        <Wrapper loading={loading} load={() => scheduleModel.effects.getScheduleFx(user)} error={error} data={schedule}>
            {!!schedule ? (
                <SchedulePageContent>
                    <div className="slider-wrapper">
                        <Slider
                            pages={[
                                {
                                    title: 'Текущая неделя',
                                    condition: !!schedule['0'],
                                },
                                {
                                    title: 'Весь семестр',
                                    condition: !!schedule['1'],
                                },
                                {
                                    title: 'Сессия',
                                    condition: !!schedule['2'],
                                },
                            ]}
                            currentPage={parseInt(currentModule)}
                            setCurrentPage={(currentPage: number) =>
                                scheduleModel.events.changeCurrentModule({
                                    currentModule: currentPage,
                                })
                            }
                        />
                    </div>
                    <div className="buttons-and-search">
                        <ScheduleViewButtonsList
                            view={view}
                            setView={(view: ViewType) => scheduleModel.events.changeView({ view })}
                        />
                        {/*<Input*/}
                        {/*    value={value}*/}
                        {/*    setValue={setValue}*/}
                        {/*    placeholder="Номер группы"*/}
                        {/*    leftIcon={!!value.length ? <FiUsers /> : <FiSearch />}*/}
                        {/*/>*/}
                    </div>
                    {teacherName && <TeacherScheduleIndicator fio={teacherName} />}
                    <WeekDayButtonsList wrapperRef={wrapperRef} data={data} />
                    {!!pages && pages[currentModule as keyof IModules]}
                </SchedulePageContent>
            ) : null}
        </Wrapper>
    )
}

export default TemplateSchedule
