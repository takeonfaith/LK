import calcTimeLeft from '@utils/calc-time-left'
import getCorrectWordForm from '@utils/get-correct-word-form'

const displayTopInfoSession = (day: string) => {
    const daysLeft = calcTimeLeft(day, 'days')
    return daysLeft < 0
        ? 'Прошло'
        : daysLeft === 0
        ? 'Сегодня'
        : daysLeft === 1
        ? 'Завтра'
        : `${daysLeft} ${getCorrectWordForm(daysLeft, {
              zero: 'дней',
              one: 'день',
              twoToFour: 'дня',
              fiveToNine: 'дней',
          })}`
}

export default displayTopInfoSession
