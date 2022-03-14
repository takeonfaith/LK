import { SelectPage } from '@features/select'

const findCurrentInSelect = (list: SelectPage[], title: string): SelectPage | null => {
    if (title.length === 0) return null

    return list.find((item) => item.title === title) ?? null
}

export default findCurrentInSelect
