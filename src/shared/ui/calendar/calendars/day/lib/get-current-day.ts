export const getCurrentDay = (defaultDay?: number) => {
    if (defaultDay !== undefined) return defaultDay

    if (new Date().getDay() === 0) {
        return 0
    }

    return new Date().getDay() - 1
}
