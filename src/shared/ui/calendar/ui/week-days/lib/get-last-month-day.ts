export const getLastMonthDay = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 0)
}
