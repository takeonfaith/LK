import { scheduleModel } from '@entities/schedule'
import { userModel } from '@entities/user'
import retakeRoutes from '@features/schedule/config'
import getSessionStats from '@features/schedule/lib/get-session-stats'
import { WeekSchedule } from '@features/schedule/ui'
import ExamStats from '@features/schedule/ui/atoms/exam-stats'
import RetakeSchedule from '@features/schedule/ui/organisms/retake-schedule'
import SessionSchedule from '@features/schedule/ui/organisms/session-schedule'
import { ISchedule } from '@shared/api/model'
import { Hint } from '@shared/ui/search'
import React, { useRef } from 'react'

const useTemplateSchedule = (data: ISchedule, teacherName: string | undefined, group: string | undefined) => {
    const { schedule, view } = data
    const {
        data: { user },
    } = userModel.selectors.useUser()

    const wrapperRef = useRef<HTMLDivElement>(null)

    const showGroupSearch = user?.user_status === 'stud' && !teacherName && !group

    const onHintClick = (hint: Hint | undefined) => {
        scheduleModel.effects.getScheduleFx({ user, group: hint?.value ?? '' })
    }

    const handleLoad = () => scheduleModel.effects.getScheduleFx({ user, group: user?.group ?? '' })

    const onValueEmpty = () => {
        scheduleModel.effects.getScheduleFx({ user, group: '' })
    }

    const setCurrentPage = (currentPage: number) => {
        scheduleModel.events.changeCurrentModule({
            currentModule: currentPage,
        })
    }

    const pages = schedule
        ? [
              {
                  title: 'Сегодня',
                  condition: !!schedule?.['0'],
                  content: <WeekSchedule view={view} wrapperRef={wrapperRef} weekSchedule={schedule['0']} key={0} />,
              },
              {
                  title: 'Неделя',
                  condition: !!schedule?.['0'],
                  content: <WeekSchedule view={view} wrapperRef={wrapperRef} weekSchedule={schedule['0']} key={0} />,
              },
              {
                  title: 'Семестр',
                  condition: !!schedule?.['1'],
                  content: <WeekSchedule view={view} wrapperRef={wrapperRef} weekSchedule={schedule['1']} key={1} />,
              },
              {
                  title: 'Сессия',
                  condition: !!schedule?.['2'],
                  content: (
                      <React.Fragment key={2}>
                          <ExamStats {...getSessionStats(schedule['2'])} />
                          <SessionSchedule view={view} wrapperRef={wrapperRef} weekSchedule={schedule['2']} />
                      </React.Fragment>
                  ),
              },
              {
                  title: 'Пересдачи',
                  condition: true,
                  content: <RetakeSchedule links={retakeRoutes} key={3} />,
              },
          ]
        : []

    return {
        pages,
        showGroupSearch,
        wrapperRef,
        setCurrentPage,
        onValueEmpty,
        handleLoad,
        onHintClick,
    }
}

export default useTemplateSchedule
