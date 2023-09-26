import { getCurrentTime } from './get-time-in-minutes'

export const getCurrentTimeLinePosition = (interval: [number, number], shift: number, scale: number) => {
    return (getCurrentTime(new Date(), interval[0] * 60, interval[1] * 60) - shift) * scale
}
