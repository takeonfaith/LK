export const getCurrentDay = () => {
    if (new Date().getDay() === 0) {
        return 0
    }

    return new Date().getDay() - 1
}
