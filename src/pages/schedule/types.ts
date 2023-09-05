import { View } from '@entities/schedule/consts'
import { IFullSchedule } from '@shared/api/model'

export type ScheduleProps = {
    schedule: IFullSchedule | null
    view: View
}
