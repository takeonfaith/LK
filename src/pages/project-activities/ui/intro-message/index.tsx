import { Message } from '@shared/ui/message'
import React from 'react'
import { FirstCourseIntroMessage } from './first-course'
import { SecondTillFourthIntroMessage } from './second-fouth-course'

export const ProjectActivityIntroMessage = ({ course }: { course: string | undefined }) => {
    if (!course) return null

    const firstCourse = course === '1'

    return (
        <Message
            lineHeight="1.5rem"
            fontSize="0.86rem"
            type="info"
            title={firstCourse ? 'Информация для студентов 1 курса!' : 'Вниманию студентов 2-4 курсов!'}
        >
            {firstCourse ? <FirstCourseIntroMessage /> : <SecondTillFourthIntroMessage />}
        </Message>
    )
}
