const getDateWithoutTime = (date: Date) => new Date(date.setHours(0, 0, 0, 0))

export default getDateWithoutTime
