const calcTimeLeft = (eventTime: string) => {
    const currentTime = new Date()
    const [startTime] = eventTime.split(' - ')
    const [startHour, startMinutes] = startTime.split(':')

    return +startHour * 60 + +startMinutes - (currentTime.getHours() * 60 + currentTime.getMinutes())
}

export default calcTimeLeft
