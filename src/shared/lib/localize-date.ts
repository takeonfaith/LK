const localizeDate = (date: string | Date | null | undefined, mode: 'long' | 'short' | 'weird' = 'long'): string => {
    if (!date) return ''

    switch (mode) {
        case 'long':
            return new Date(Date.parse(date as string)).toLocaleDateString('ru', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            })
        case 'short':
            return new Date(Date.parse(date as string)).toLocaleDateString('ru', {
                month: 'short',
                day: 'numeric',
            })
        case 'weird':
            const month =
                (date as Date).getMonth() < 10
                    ? `0${(date as Date).getMonth() + 1}`
                    : `${(date as Date).getMonth() + 1}`

            return `${(date as Date).getFullYear()}-${month}-${(date as Date).getDate()}`
        default:
            return new Date(Date.parse(date as string)).toLocaleDateString('ru', {
                month: 'short',
                day: 'numeric',
            })
    }
}

export default localizeDate
