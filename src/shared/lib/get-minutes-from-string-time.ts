export type TimeType = `${string}:${string}`

export const getMinutesFromStringTime = (time: TimeType) => {
    const [startTime, endTime] = time.split(':')

    return +startTime * 60 + +endTime
}
