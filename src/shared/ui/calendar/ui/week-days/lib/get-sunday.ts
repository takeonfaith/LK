export const getSunday = (date: Date) => {
    const localDate = new Date(date)
    const lastday = localDate.getDate() - (localDate.getDay() - 1) + 6
    return new Date(localDate.setDate(lastday))
}
