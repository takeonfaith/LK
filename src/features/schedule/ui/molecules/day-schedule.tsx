import { ILessons, ISubject } from '@api/model'
import calcNextSubjectTime from '@features/schedule/lib/calc-next-subject-time'
import isDayEnded from '@features/schedule/lib/is-day-ended'
import { Title, Error } from '@ui/atoms'
import calcTimeLeft from '@utils/calc-time-left'
import useOnScreen from '@utils/hooks/use-on-screen'
import useResize from '@utils/hooks/use-resize'
import React, { useEffect, useMemo, useRef } from 'react'
import { useRouteMatch } from 'react-router'
import inTimeInterval from '../../lib/in-time-interval'
import { DayEnded, DayScheduleListWrapper, DayScheduleWrapper, HolidayPlate, SkeletonLoading, Subject } from '../atoms'

type Props = ILessons & {
    weekDay?: string
    isCurrent?: boolean
    view?: string
    width?: number
    height?: number
    topInfo: React.ReactNode | string
    error?: string | null
}

const DaySchedule = ({ lessons, weekDay, isCurrent, view, width, height, topInfo, error }: Props) => {
    const route: { params: { fio?: string } } = useRouteMatch()
    const dayRef = useRef<null | HTMLDivElement>(null)
    const isOnScreen = useOnScreen(dayRef)
    const { height: screenHeight } = useResize()

    const nextSubjectTime = useMemo(() => calcNextSubjectTime(lessons ?? []), [lessons])

    useEffect(() => {
        if (dayRef?.current && !!lessons) {
            const currentLessonIndex = !isDayEnded(lessons)
                ? lessons?.findIndex(
                      (lesson) =>
                          inTimeInterval(lesson.timeInterval) ||
                          calcNextSubjectTime(lessons) === calcTimeLeft(lesson.timeInterval),
                  ) ?? -1
                : lessons.length

            if (isCurrent && !isDayEnded(lessons) ? currentLessonIndex !== -1 : lessons?.length + 1) {
                dayRef.current.scrollTop = currentLessonIndex * 150
            }
        }
    }, [lessons])

    return (
        <DayScheduleWrapper
            isCurrent={isCurrent ?? false}
            isFull={view === 'full'}
            isVisible={isOnScreen}
            width={width}
            height={height}
        >
            {!!weekDay && !!lessons && (
                <div className="day-title">
                    <Title size={4} align="left">
                        {weekDay}
                    </Title>
                    <span>{topInfo}</span>
                </div>
            )}
            <DayScheduleListWrapper
                isFull={view === 'full'}
                ref={dayRef}
                height={screenHeight}
                isTeacherSchedule={!!route.params.fio?.length}
            >
                {!lessons && !error && <SkeletonLoading />}
                {error && <Error text={'Ошибка'} size="70px" />}
                {!!lessons &&
                    lessons.map((subject: ISubject, index) => {
                        return (
                            <Subject
                                {...subject}
                                key={index}
                                view={view}
                                isCurrent={(isCurrent && inTimeInterval(subject.timeInterval)) ?? false}
                                isNext={isCurrent && nextSubjectTime === calcTimeLeft(subject.timeInterval)}
                            />
                        )
                    })}
                {!!lessons && !lessons.length && <HolidayPlate />}
                {!!lessons && !!lessons.length && !topInfo && isDayEnded(lessons) && <DayEnded />}
            </DayScheduleListWrapper>
        </DayScheduleWrapper>
    )
}

export default DaySchedule
