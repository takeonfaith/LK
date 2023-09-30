export const isValidDate = (date: unknown) => {
    return date instanceof Date && isFinite(+date)
}
