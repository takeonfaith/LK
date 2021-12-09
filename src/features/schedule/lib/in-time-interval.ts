const inTimeInterval = (timeInterval: string) => {
    let startTime = '',
        endTime = ''
    const currentTime = new Date()

    const a = timeInterval.split(' - ')
    startTime = a[0]
    endTime = a[1]
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
