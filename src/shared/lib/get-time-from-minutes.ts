import get2DigitDumber from './get-2-digit-number'

const getTimeFromMinutes = (minutes: number) => {
    return `${get2DigitDumber(Math.floor(minutes / 60))}:${get2DigitDumber(minutes % 60)}`
}

export default getTimeFromMinutes
