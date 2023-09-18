export const getDateInSomeDays = (date: Date, days: number): Date => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days)
}
