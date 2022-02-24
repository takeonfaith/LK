import { ILessons, ISubject } from '@api/model'
import calcNextSubjectTime from '@features/schedule/lib/calc-next-subject-time'
import { Title } from '@ui/atoms'
import calcTimeLeft from '@utils/calc-time-left'
import useOnScreen from '@utils/hooks/use-on-screen'
import useResize from '@utils/hooks/use-resize'
import React, { useEffect, useMemo, useRef } from 'react'
import inTimeInterval from '../../lib/in-time-interval'
import { DayScheduleListWrapper, DayScheduleWrapper, HolidayPlate, SkeletonLoading, Subject } from '../atoms'

type Props = ILessons & {
    weekDay?: string
    isCurrent?: boolean
    view?: string
    width?: number
    height?: number
    topInfo: React.ReactNode | string
}

const DaySchedule = ({ lessons, weekDay, isCurrent, view, width, height, topInfo }: Props) => {
    const dayRef = useRef<null | HTMLDivElement>(null)
    const isOnScreen = useOnScreen(dayRef)
    const { height: screenHeight } = useResize()

    const nextSubjectTime = useMemo(() => calcNextSubjectTime(lessons ?? []), [lessons])

    useEffect(() => {
        if (dayRef?.current) {
            const currentLessonIndex =
                lessons?.findIndex(
                    (lesson) =>
                        inTimeInterval(lesson.timeInterval) ||
                        calcNextSubjectTime(lessons) === calcTimeLeft(lesson.timeInterval),
                ) ?? -1
            if (isCurrent && currentLessonIndex !== -1) {
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
            <DayScheduleListWrapper isFull={view === 'full'} ref={dayRef} height={screenHeight}>
                {!lessons && <SkeletonLoading />}
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
                {/* {!!lessons && !!lessons.length && new Date().getHours() > lessons[lessons.length-1].timeInterval.split('')} */}
            </DayScheduleListWrapper>
        </DayScheduleWrapper>
    )
}

export default DaySchedule
