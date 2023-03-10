import { IModules, ISchedule, ViewType } from '@api/model'
import { scheduleModel } from '@entities/schedule'
import { userModel } from '@entities/user'
import retakeRoutes from '@features/schedule/config'
import getSessionStats from '@features/schedule/lib/get-session-stats'
import {
    ScheduleViewButtonsList,
    FilterScheduleIndicator,
    WeekDayButtonsList,
    WeekSchedule,
} from '@features/schedule/ui'
import ExamStats from '@features/schedule/ui/atoms/exam-stats'
import RetakeSchedule from '@features/schedule/ui/organisms/retake-schedule'
import SessionSchedule from '@features/schedule/ui/organisms/session-schedule'
import SearchWithHints from '@features/search-with-hints'
import { getGroups } from '@shared/api/student-api'
import Masks from '@shared/lib/masks'
import { Hint } from '@shared/ui/search'
import { Wrapper } from '@ui/atoms'
import React, { useMemo, useRef, useState } from 'react'
import { FiUsers } from 'react-icons/fi'
import styled from 'styled-components'
import { Slider } from 'widgets'

const SchedulePageContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;

    .slider-wrapper {
        width: 100%;
        max-width: 650px;
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
    group?: string
    data: ISchedule
    loading: boolean
    error: string | null
}

const TemplateSchedule = ({ teacherName, group, data, loading, error }: Props) => {
    const { schedule, currentModule, view } = data
    const {
        data: { user },
    } = userModel.selectors.useUser()

    const wrapperRef = useRef<HTMLDivElement>(null)

    const [groupSearch, setGroupSearch] = useState(user?.group ?? '')

    const showGroupSearch = user?.user_status === 'stud' && !teacherName && !group

    const onHintClick = (hint: Hint | undefined) => {
        scheduleModel.effects.getScheduleFx({ user, group: hint?.value ?? '' })
    }

    const onValueEmpty = () => {
        scheduleModel.effects.getScheduleFx({ user, group: '' })
    }

    const pages = useMemo(() => {
        return (
            !!schedule && [
                <WeekSchedule view={view} wrapperRef={wrapperRef} weekSchedule={schedule['0']} key={0} />,
                <WeekSchedule view={view} wrapperRef={wrapperRef} weekSchedule={schedule['1']} key={1} />,
                <React.Fragment key={2}>
                    <ExamStats {...getSessionStats(schedule['2'])} />
                    <SessionSchedule view={view} wrapperRef={wrapperRef} weekSchedule={schedule['2']} />
                </React.Fragment>,
                <RetakeSchedule links={retakeRoutes} key={3} />,
            ]
        )
    }, [schedule, view])

    return (
        <Wrapper
            loading={loading}
            load={() => scheduleModel.effects.getScheduleFx({ user, group: user?.group ?? '' })}
            error={error}
            data={schedule}
        >
            {
                <SchedulePageContent>
                    <div className="slider-wrapper">
                        <Slider
                            appearance={false}
                            pages={[
                                {
                                    title: 'Текущая неделя',
                                    condition: !!schedule?.['0'],
                                },
                                {
                                    title: 'Весь семестр',
                                    condition: !!schedule?.['1'],
                                },
                                {
                                    title: 'Сессия',
                                    condition: !!schedule?.['2'],
                                },
                                {
                                    title: 'Пересдачи',
                                    condition: true,
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
                    {currentModule !== '3' && (
                        <div className="buttons-and-search">
                            <ScheduleViewButtonsList
                                view={view}
                                setView={(view: ViewType) => scheduleModel.events.changeView({ view })}
                            />
                            {showGroupSearch && (
                                <SearchWithHints
                                    value={groupSearch}
                                    setValue={setGroupSearch}
                                    onHintClick={onHintClick}
                                    placeholder={'Группа'}
                                    customMask={Masks.groupMask}
                                    request={getGroups}
                                    leftIcon={<FiUsers />}
                                    onValueEmpty={user?.user_status === 'staff' ? onValueEmpty : undefined}
                                />
                            )}
                        </div>
                    )}
                    {(teacherName || group) && (
                        <FilterScheduleIndicator filter={teacherName ?? group ?? ''} isGroup={!!group} />
                    )}
                    {currentModule !== '3' && <WeekDayButtonsList wrapperRef={wrapperRef} data={data} />}
                    {!!pages && pages[currentModule as keyof IModules]}
                </SchedulePageContent>
            }
        </Wrapper>
    )
}

export default TemplateSchedule
