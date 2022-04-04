import { IModules } from '@api/model'
import { scheduleModel } from '@entities/schedule'
import getSchedule from '@entities/schedule/lib/get-schedule'
import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router'
import TemplateSchedule from 'widgets/template-schedule'

const TeachersSchedule = () => {
    const route: { params: { fio?: string } } = useRouteMatch()
    const { data } = scheduleModel.selectors.useSchedule()

    const [teacherSchedule, setTeacherSchedule] = useState<IModules | null>(null)

    useEffect(() => {
        setTeacherSchedule(null)
        if (route.params.fio) getSchedule(route?.params?.fio ?? '').then((res) => setTeacherSchedule(res))
    }, [route.params.fio])

    return (
        <TemplateSchedule
            teacherName={route.params.fio}
            data={{ ...data, schedule: teacherSchedule }}
            loading={!teacherSchedule}
            error={null}
        />
    )
}

export default TeachersSchedule
