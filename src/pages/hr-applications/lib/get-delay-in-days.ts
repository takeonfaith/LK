import localizeDate from '@utils/localize-date'

const getDelayInDays = (period: number) => {
    const date = new Date()
    date.setDate(date.getDate() + period)
    return localizeDate(date, 'extraWeird')
}

export default getDelayInDays
