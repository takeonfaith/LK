const convertTimeZone = (date: Date, timeZone: string) => {
    return date.toLocaleString('en-US', { timeZone: timeZone })
}

export default convertTimeZone
