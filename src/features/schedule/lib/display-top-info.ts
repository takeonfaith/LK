import { IWeekSchedule } from '@api/model'
import { IWeekDays } from '@consts'
import getCorrectWordForm from '@utils/get-correct-word-form'

const displayTopInfo = (weekSchedule: Nullable<IWeekSchedule>, day: keyof IWeekDays) => {
    const lessons = weekSchedule?.[day].lessons
    return !!weekSchedule && !!lessons
        ? `${lessons?.length} ${getCorrectWordForm(lessons?.length ?? 0, {
              zero: 'пар',
              one: 'пара',
              twoToFour: 'пары',
              fiveToNine: 'пар',
          })}`
        : '0 пар'
}

export default displayTopInfo
