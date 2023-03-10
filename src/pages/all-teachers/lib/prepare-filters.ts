import { SelectPage } from '@features/select'

const prepareFilters = (divisions: string[]): SelectPage[] => {
    const filters = [{ id: 'Все', title: 'Все' }]

    const sorted = divisions.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))

    for (let i = 0; i < sorted.length; i++) {
        const division = sorted[i]
        filters.push({ id: division, title: division })
    }

    return filters
}

export default prepareFilters
