export const getDaysBetweenDates = (date1: Date, date2: Date) => {
    const timeDiff = date2.getTime() - date1.getTime()
    const daysBetweenDates = timeDiff / (1000 * 3600 * 24)

    // Отнимаем все воскресенья
    return daysBetweenDates - Math.floor(daysBetweenDates / 6.5) + 1
}
