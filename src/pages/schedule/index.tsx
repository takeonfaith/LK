import { IWeekSchedule, ViewType } from '@api/model'
import { WeekSchedule } from '@features/schedule/ui'
import WeekDayButtonsList from '@features/schedule/ui/molecules/week-day-buttons-list'
import { Wrapper } from '@ui/atoms'
import useResize from '@utils/hooks/use-resize'
import React from 'react'
import styled from 'styled-components'
import Slider from 'widgets/slider/molecules/slider'
import { scheduleModel } from '@entities/schedule'
import ScheduleViewButtonsList from '@features/schedule/ui/molecules/schedule-view-buttons-list'

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
    const {
        data: { schedule, currentModule, view },
        loading,
        error,
    } = scheduleModel.selectors.useSchedule()

    const { width } = useResize()

    return (
        <Wrapper loading={loading} load={() => scheduleModel.effects.getScheduleFx()} error={error} data={schedule}>
            {!!schedule ? (
                <SchedulePageContent>
                    <div className="slider-wrapper">
                        <Slider
                            pages={['Текущяя неделя', 'Весь семестр']}
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
            ) : null}
        </Wrapper>
    )
}

export default SchedulePage
