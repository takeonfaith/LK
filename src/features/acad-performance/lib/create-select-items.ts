import { SelectPage } from '@features/select'
import findSemestr from '@utils/find-semestr'

const createSelectItems = (course: number) => {
    const count = findSemestr(new Date().toISOString(), course)

    const result: SelectPage[] = []
    for (let i = 1; i <= count; i++) {
        result.push({ id: i, title: `${i} семестр` })
    }

    result.push({ id: -1, title: 'Все семестры' })

    return result
}

export default createSelectItems
