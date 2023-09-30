import { Months } from '@shared/models/months'

export const getFullEndDate = (endDate: string, startDate: string) => {
    const [endDay, endMonth] = endDate?.split(' ') ?? [null, null]
    const startMonth = startDate.split(' ')[1]

    const parsedStartDateMonth = Months[startMonth as keyof typeof Months]
    const parsedEndDateMonth = Months[endMonth as keyof typeof Months] || parsedStartDateMonth

    return !!endDay && !!parsedEndDateMonth
        ? new Date(
              `${parsedEndDateMonth}/${endDay}/${
                  parsedEndDateMonth >= parsedStartDateMonth ? new Date().getFullYear() : new Date().getFullYear() + 1
              }`,
          )
        : null
}
