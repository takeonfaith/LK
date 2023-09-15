export const getDaysBetweenDates = (date1: Date, date2: Date) => {
    const timeDiff = date2.getTime() - date1.getTime()
    const daysBetweenDates = timeDiff / (1000 * 3600 * 24)

    // Отнимаем все воскресенья
    // Коэф рандомный, подобран чисто чтобы ровно всегда было. Изначально был 7 в честь всех дней в неделе, но
    // из-за этого считал не ровно до date2 на большом промежутке. Так что вот такое решение
    return daysBetweenDates - Math.floor(daysBetweenDates / 6.55) + 1
}
