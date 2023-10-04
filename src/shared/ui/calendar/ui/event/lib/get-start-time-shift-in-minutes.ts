export const getStartTimeShiftInMinutes = (startTime: string) => {
    // E.g 12:20 -> 740
    const [hour, minute] = startTime.split(':')
    return +hour * 60 + +minute
}
