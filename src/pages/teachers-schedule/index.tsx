import { IFullSchedule } from '@api/model'
import { scheduleModel } from '@entities/schedule'
import getSchedule from '@entities/schedule/lib/get-schedule'
import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router'
import TemplateSchedule from 'widgets/template-schedule'

const checkIfGroup = (filter: string | undefined) => (filter?.length === 7 || filter?.length === 8) && filter[3] === '-'

const TeachersSchedule = () => {
    const route: { params: { filter?: string } } = useRouteMatch()
    const { data } = scheduleModel.selectors.useSchedule()
    const isGroup = checkIfGroup(route.params.filter)

    const [teacherSchedule, setTeacherSchedule] = useState<IFullSchedule | null>(null)

    useEffect(() => {
        const scheduleRequest = isGroup
            ? getSchedule('', route.params.filter)
            : getSchedule(route?.params?.filter ?? '')
        setTeacherSchedule(null)
        if (route.params.filter) scheduleRequest.then((res) => setTeacherSchedule(res.schedule))
    }, [route.params.filter])

    return (
        <TemplateSchedule
            teacherName={!isGroup ? route.params.filter : undefined}
            group={isGroup ? route.params.filter : undefined}
            data={{ ...data, schedule: teacherSchedule }}
            loading={!teacherSchedule}
            error={null}
        />
    )
}

export default TeachersSchedule
