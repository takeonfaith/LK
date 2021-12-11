import React, { useEffect, useState } from 'react'
import { FiSearch, FiUsers } from 'react-icons/fi'
import styled from 'styled-components'
import { scheduleModel } from '../../entities/schedule'
import { WeekSchedule } from '../../features/schedule/ui'
import ScheduleViewButtonsList from '../../features/schedule/ui/molecules/schedule-view-buttons-list'
import WeekDayButtonsList from '../../features/schedule/ui/molecules/week-day-buttons-list'
import Slider from '../../features/slider/molecules/slider'
import { IWeekSchedule, ViewType } from '../../shared/api/model'
import useResize from '../../shared/lib/hooks/use-resize'
import { Input, Wrapper } from '../../shared/ui/atoms'

const SchedulePageContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;

    .slider-wrapper {
        width: 100%;
        max-width: 400px;
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

const SchedulePage = () => {
    const { schedule, currentModule, view } = scheduleModel.selectors.useSchedule()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])
    const [value, setValue] = useState('191-722')
    const { width } = useResize()

    return (
        <Wrapper loading={loading}>
            <SchedulePageContent>
                <div className="slider-wrapper">
                    <Slider
                        pages={['Первый модуль', 'Второй модуль']}
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
                    <Input
                        value={value}
                        setValue={setValue}
                        placeholder="Номер группы"
                        leftIcon={!!value.length ? <FiUsers /> : <FiSearch />}
                    />
                </div>
                <WeekDayButtonsList />
                <WeekSchedule
                    view={view}
                    weekSchedule={
                        schedule[
                            currentModule.toString() as keyof {
                                '0': IWeekSchedule
                                '1': IWeekSchedule
                            }
                        ]
                    }
                />
                {width < 1000 && <WeekDayButtonsList />}
            </SchedulePageContent>
        </Wrapper>
    )
}

export default SchedulePage
