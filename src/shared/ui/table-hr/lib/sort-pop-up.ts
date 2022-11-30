import { popUpMessageModel } from '@entities/pop-up-message'
import { SortType } from '../types'

const sortPopUp = (sort: SortType) => {
    switch (sort) {
        case 'desc':
            return popUpMessageModel.events.evokePopUpMessage({
                message: 'Таблица отсортирована по убыванию',
                type: 'info',
                time: 5000,
            })

        case 'asc':
            return popUpMessageModel.events.evokePopUpMessage({
                message: 'Таблица отсортирована по возрастанию',
                type: 'info',
                time: 5000,
            })
        default:
            return popUpMessageModel.events.evokePopUpMessage({
                message: 'Сортировка отключена',
                type: 'info',
                time: 5000,
            })
    }
}

export default sortPopUp
