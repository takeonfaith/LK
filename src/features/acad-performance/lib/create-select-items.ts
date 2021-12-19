import findSemestr from '@utils/find-semestr'

interface IResult {
    [key: number]: string
}

const createSelectItems = (course: number) => {
    const count = findSemestr(new Date().toISOString(), course)

    const result: IResult = {}
    for (let i = 1; i <= count; i++) {
        result[i] = `${i} семестр`
    }

    result[-1] = 'Все семестры'

    return result
}

export default createSelectItems
