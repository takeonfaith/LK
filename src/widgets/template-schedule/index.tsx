import { ISchedule, ITimeIntervalColor, TimeIntervalColor } from '@api/model'
import { userModel } from '@entities/user'
import { getSubjectIcon } from '@features/acad-performance/lib/get-subject-icon'
import SearchWithHints from '@features/search-with-hints'
import { getGroups } from '@shared/api/student-api'
import Masks from '@shared/lib/masks'
import { DayCalendar } from '@shared/ui/calendar'
import PageBlock from '@shared/ui/page-block'
import { Wrapper } from '@ui/atoms'
import React, { useState } from 'react'
import { FiUsers } from 'react-icons/fi'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'
import { Slider } from 'widgets'
import useTemplateSchedule from './hooks/use-template-schedule'

// const SchedulePageContent = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     row-gap: 30px;

//     .slider-wrapper {
//         width: 100%;
//         max-width: 650px;
//     }

//     .buttons-and-search {
//         display: flex;
//         align-items: center;
//         column-gap: 10px;
//     }

//     @media (max-width: 1000px) {
//         row-gap: 15px;
//     }
// `

interface Props {
    teacherName?: string
    group?: string
    data: ISchedule
    loading: boolean
    error: string | null
}

const TemplateSchedule = ({ teacherName, group, data, loading, error }: Props) => {
    const { schedule, currentModule } = data
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const [groupSearch, setGroupSearch] = useState(user?.group ?? '')
    const { pages, showGroupSearch, setCurrentPage, onValueEmpty, handleLoad, onHintClick } = useTemplateSchedule(
        data,
        teacherName,
        group,
    )

    return (
        <Wrapper loading={loading} load={handleLoad} error={error} data={schedule}>
            <PageBlock
                topRightCornerElement={
                    showGroupSearch && (
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
                    )
                }
            >
                <Slider
                    appearance={false}
                    pages={pages}
                    currentPage={parseInt(currentModule)}
                    setCurrentPage={setCurrentPage}
                />
                {/* <FilterScheduleIndicator
                    visible={!!teacherName || !!group}
                    filter={teacherName ?? group ?? ''}
                    isGroup={!!group}
                />
                {currentModule !== '3' && <WeekDayButtonsList wrapperRef={wrapperRef} data={data} />} */}
                <DayCalendar
                    interval={[9, 22]}
                    events={[
                        {
                            title: 'Моделирование информационных систем',
                            icon: getSubjectIcon('Моделирование информационных систем'),
                            duration: 60,
                            place: 'Прянишникова 2А, 2445',
                            placeIcon: <HiOutlineOfficeBuilding />,
                            people: ['Test Test Test'],
                            startTime: '9:00',
                            color: TimeIntervalColor['9:00 - 10:30' as keyof ITimeIntervalColor].dark2,
                        },
                        {
                            title: 'Основы современных алгоритмов',
                            icon: getSubjectIcon('Основы современных алгоритмов'),
                            duration: 60,
                            place: 'Прянишникова 2А, 2445',
                            placeIcon: <HiOutlineOfficeBuilding />,
                            people: ['Test Test Test'],
                            startTime: '10:10',
                            color: TimeIntervalColor['10:40 - 12:10' as keyof ITimeIntervalColor].dark2,
                        },
                        {
                            title: 'Основы современных алгоритмов',
                            icon: getSubjectIcon('Основы современных алгоритмов'),
                            duration: 60,
                            place: 'Прянишникова 2А, 2445',
                            placeIcon: <HiOutlineOfficeBuilding />,
                            people: ['Test Test Test'],
                            startTime: '12:00',
                            color: TimeIntervalColor['10:40 - 12:10' as keyof ITimeIntervalColor].dark2,
                        },
                        {
                            title: 'Базы данных',
                            icon: getSubjectIcon('Базы данных'),
                            duration: 60,
                            place: 'Прянишникова 2А, 2445',
                            placeIcon: <HiOutlineOfficeBuilding />,
                            people: ['Test Test Test'],
                            startTime: '14:30',
                            color: TimeIntervalColor['14:30 - 16:00' as keyof ITimeIntervalColor].dark2,
                        },
                    ]}
                />
            </PageBlock>
        </Wrapper>
    )
}

export default TemplateSchedule
