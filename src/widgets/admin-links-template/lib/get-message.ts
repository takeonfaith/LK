import localizeDate from '@utils/localize-date'

const getMessage = (dates: string[]) => {
    if (!dates[0].length && !!dates[1].length) return `За весь период до ${localizeDate(dates[1])} включительно`

    if (!!dates[0].length && !dates[1].length) return `За весь период начиная с ${localizeDate(dates[0])} включительно`

    if (!dates[0].length && !dates[1].length) return 'За все время'

    if (!!dates[0].length && !!dates[1].length)
        return `За период с ${localizeDate(dates[0])} по ${localizeDate(dates[1])}`
}

export default getMessage
