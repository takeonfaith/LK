import { IModules, ISchedule, ViewType } from '@api/model'
import { scheduleModel } from '@entities/schedule'
import { userModel } from '@entities/user'
import { FilterScheduleIndicator, ScheduleViewButtonsList, WeekDayButtonsList } from '@features/schedule/ui'
import SearchWithHints from '@features/search-with-hints'
import { getGroups } from '@shared/api/student-api'
import Masks from '@shared/lib/masks'
import { Wrapper } from '@ui/atoms'
import React from 'react'
import { useState } from 'react'
import { FiUsers } from 'react-icons/fi'
import styled from 'styled-components'
import { Slider } from 'widgets'
import useTemplateSchedule from './hooks/use-template-schedule'

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
    const [groupSearch, setGroupSearch] = useState(user?.group ?? '')
    const { pages, wrapperRef, showGroupSearch, setCurrentPage, onValueEmpty, handleLoad, onHintClick } =
        useTemplateSchedule(data, teacherName, group)

    return (
        <Wrapper loading={loading} load={handleLoad} error={error} data={schedule}>
            {
                <SchedulePageContent>
                    <div className="slider-wrapper">
                        <Slider
                            appearance={false}
                            pages={pages}
                            currentPage={parseInt(currentModule)}
                            setCurrentPage={setCurrentPage}
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
                    <FilterScheduleIndicator
                        visible={!!teacherName || !!group}
                        filter={teacherName ?? group ?? ''}
                        isGroup={!!group}
                    />
                    {currentModule !== '3' && <WeekDayButtonsList wrapperRef={wrapperRef} data={data} />}
                    {!!pages && pages[currentModule as keyof IModules]?.content}
                </SchedulePageContent>
            }
        </Wrapper>
    )
}

export default TemplateSchedule
