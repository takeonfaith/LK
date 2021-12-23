const inTimeInterval = (timeInterval: string) => {
    const currentTime = new Date()

    const [startTime, endTime] = timeInterval.split(' - ')
    let pieces = startTime.split(':')
    const startHour = parseInt(pieces[0])
    const startMinute = parseInt(pieces[1], 10)
    pieces = endTime.split(':')
    const endHour = parseInt(pieces[0], 10)
    const endMinute = parseInt(pieces[1], 10)
    if (currentTime.getHours() * 60 + currentTime.getMinutes() >= startHour * 60 + startMinute) {
        if (currentTime.getHours() * 60 + currentTime.getMinutes() <= endHour * 60 + endMinute) {
            return true
        }
    }
    return false
}

export default inTimeInterval
