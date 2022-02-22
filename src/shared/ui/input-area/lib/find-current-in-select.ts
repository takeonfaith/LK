import { SelectPage } from '@features/select'

const findCurrentInSelect = (list: SelectPage[], title: string): SelectPage => {
    if (title.length === 0) return { id: 'not-chosen', title: 'Не выбрано' }

    return list.find((item) => item.title === title) ?? { id: 'not-chosen', title: 'Не выбрано' }
}

export default findCurrentInSelect
