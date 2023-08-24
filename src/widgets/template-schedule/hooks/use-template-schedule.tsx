import { scheduleModel } from '@entities/schedule'
import { userModel } from '@entities/user'
import retakeRoutes from '@features/schedule/config'
import getSessionStats from '@features/schedule/lib/get-session-stats'
import ExamStats from '@features/schedule/ui/atoms/exam-stats'
import RetakeSchedule from '@features/schedule/ui/organisms/retake-schedule'
import SessionSchedule from '@features/schedule/ui/organisms/session-schedule'
import { IFullSchedule, ISchedule } from '@shared/api/model'
import { DayCalendar } from '@shared/ui/calendar'
import WeekCalendar from '@shared/ui/calendar/week'
import { Hint } from '@shared/ui/search'
import React, { useRef, useState } from 'react'

const useTemplateSchedule = (data: ISchedule, teacherName: string | undefined, group: string | undefined) => {
    const { schedule, view } = data

    const {
        data: { user },
    } = userModel.selectors.useUser()

    const [isListView, setIsListView] = useState<boolean>(false)

    const wrapperRef = useRef<HTMLDivElement>(null)

    const showGroupSearch = user?.user_status === 'stud' && !teacherName && !group

    const onHintClick = (hint: Hint | undefined) => {
        scheduleModel.effects.getScheduleFx({ user, group: hint?.value ?? '' })
    }

    const handleLoad = () => scheduleModel.effects.getScheduleFx({ user, group: user?.group ?? '' })

    const onValueEmpty = () => {
        scheduleModel.effects.getScheduleFx({ user, group: '' })
    }

    const handleListView = () => {
        setIsListView((prev) => !prev)
    }

    const pages = schedule
        ? [
              {
                  title: 'День',
                  condition: !!schedule?.today,
                  content: <DayCalendar interval={[9, 22]} events={schedule?.today} key={0} listView={isListView} />,
              },
              {
                  title: 'Неделя',
                  condition: !!schedule?.week,
                  content: <WeekCalendar interval={[9, 22]} events={schedule?.week} key={1} showDates />,
              },
              {
                  title: 'Семестр',
                  condition: !!schedule?.semestr,
                  content: <WeekCalendar interval={[9, 22]} events={schedule?.semestr} key={2} showDates={false} />,
              },
              {
                  title: 'Сессия',
                  condition: !!schedule?.session,
                  content: (
                      <React.Fragment key={3}>
                          <ExamStats {...getSessionStats(schedule?.session)} />
                          <SessionSchedule view={view} wrapperRef={wrapperRef} weekSchedule={schedule?.session} />
                      </React.Fragment>
                  ),
              },
          ]
        : []

    if (!teacherName) {
        pages.push({
            title: 'Пересдачи',
            condition: true,
            content: <RetakeSchedule links={retakeRoutes} key={3} />,
        })
    }

    const handleCurrentPage = (currentModuleIndex: number) => {
        if (schedule) {
            const currentModule = Object.keys(schedule)[currentModuleIndex] as keyof IFullSchedule

            scheduleModel.events.changeCurrentModule({
                currentModule,
            })
        }
    }

    return {
        pages,
        showGroupSearch,
        wrapperRef,
        isListView,
        onValueEmpty,
        handleLoad,
        handleCurrentPage,
        onHintClick,
        handleListView,
    }
}

export default useTemplateSchedule
