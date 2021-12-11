const getMonthDiff = (date1: Date, date2: Date) => {
    let months
    months = (date2.getFullYear() - date1.getFullYear()) * 12
    months -= date1.getMonth()
    months += date2.getMonth()
    return months <= 0 ? 0 : months
}

export default getMonthDiff
