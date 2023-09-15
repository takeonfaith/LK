import localizeDate from '@shared/lib/dates/localize-date'

const getDelayInDays = (period: number) => {
    const date = new Date()
    date.setDate(date.getDate() + period)
    return localizeDate(date, 'extraWeird')
}

export default getDelayInDays
