import { IWeekSchedule } from '@api/model'
import { IWeekDays } from '@consts'
import getCorrectWordForm from '@utils/get-correct-word-form'

const displayTopInfo = (weekSchedule: IWeekSchedule | null | undefined, day: keyof IWeekDays) => {
    return !!weekSchedule && !!weekSchedule[day].lessons && !!weekSchedule[day as keyof IWeekDays].lessons
        ? `${weekSchedule?.[day]?.lessons?.length} ${getCorrectWordForm(weekSchedule?.[day]?.lessons?.length ?? 0, {
              zero: 'пар',
              one: 'пара',
              twoToFour: 'пары',
              fiveToNine: 'пар',
          })}`
        : '0 пар'
}

export default displayTopInfo
