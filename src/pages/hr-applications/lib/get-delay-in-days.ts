import localizeDate from '@utils/localize-date'

const getDelayInDays = (period: number, startDate?: string) => {
    //startDate = '2023-04-10'
    console.log(111, 2222)
    console.log('111' + startDate)
    if (startDate) {    
        const newDate = new Date(Date.parse(startDate))
        newDate.setDate(newDate.getDate() + period)
        return localizeDate(newDate, 'extraWeird')
    } else {
        const date = new Date()        
        date.setDate(date.getDate() + period)
        return localizeDate(date, 'extraWeird')
    }
}

export default getDelayInDays
