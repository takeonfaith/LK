export const getFilters = (filters: Record<string, { value: string | number; strict?: boolean }>) => {
    const orArr = []
    for (const [key, { value, strict }] of Object.entries(filters)) {
        if (key.includes('.')) {
            const [firstVal, secondVal] = key.split('.')
            if (typeof value === 'number') {
                // If the value is a number, create filter without contains
                orArr.push({ [firstVal]: { [secondVal]: { eq: value } } })
            } else {
                orArr.push({ [firstVal]: { [secondVal]: { [strict ? 'eq' : 'contains']: `${value}` } } })
            }
        } else {
            if (typeof value === 'number') {
                // If the value is a number, create filter without contains
                orArr.push({ [key]: { eq: value } })
            } else {
                orArr.push({ [key]: { contains: `${value}` } })
            }
        }
    }
    return { and: orArr }
}
