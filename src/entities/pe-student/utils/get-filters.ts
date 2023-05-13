export const getFilters = (filters: Record<string, string>) => {
    const orArr = []
    for (const [key, value] of Object.entries(filters)) {
        orArr.push({ [key]: { contains: `${value}` } })
    }
    return { or: orArr }
}
