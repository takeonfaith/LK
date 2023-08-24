import get2DigitDumber from '@shared/lib/get-2-digit-number'

export const getEndTime = (startTime: string, duration: number) => {
    const [hour, minute] = startTime.split(':')
    const endTimeMinutes = +hour * 60 + +minute + duration

    return `${get2DigitDumber(Math.floor(endTimeMinutes / 60))}:${get2DigitDumber(endTimeMinutes % 60)}`
}
