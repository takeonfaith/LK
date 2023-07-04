export const getLastYearForPeriod = (countYear = 10) => {
    const currentYear = new Date().getFullYear()
    const years = []

    for (let i = 0; i <= countYear; i++) {
        years.push({ id: i, title: String(currentYear - i) })
    }

    return years
}
