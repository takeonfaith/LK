export const getMonday = (date: Date) => {
    const localDate = new Date(date)
    const day = localDate.getDay()
    const diff = localDate.getDate() - day + (day == 0 ? -6 : 1) // adjust when day is sunday
    return new Date(localDate.setDate(diff))
}
