import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'
import { NumberOfCopiesOptions } from '@entities/applications/consts'

const SocialPlaceOfReferenceOptions = [
    { id: 0, title: 'в Пенсионный фонд Российской Федерации (ПФР)' },
    { id: 1, title: 'в Управление социальной защиты населения (УСЗН)' },
    { id: 2, title: 'в военный комиссариат' },
    { id: 3, title: 'в Многофункциональный центр (МФЦ)' },
    { id: 4, title: 'в Федеральную налоговую службу (ФНС)' },
    { id: 5, title: 'в банк' },
    { id: 6, title: 'в Федеральную службу труда и занятости' },
    { id: 7, title: 'в отдел/орган опеки и попечительства' },
    { id: 8, title: 'в социальное учреждение' },
    { id: 9, title: 'по месту требования' },
]

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    return {
        title: 'Справка в социальные учреждения',
        data: [
            {
                title: 'Телефон',
                type: 'tel',
                mask: true,
                fieldName: 'phone',
                editable: true,
                required: true,
                value: dataUserApplication.phone,
            },

            {
                title: 'Email',
                type: 'email',
                fieldName: 'email',
                value: dataUserApplication.email,
                editable: true,
                required: true,
            },
            {
                title: 'Выберите структурное подразделение для обращения',
                type: 'radio',
                fieldName: 'structural_subdivision',
                value: null,
                editable: true,
                required: true,
                items: [
                    {
                        id: 0,
                        title: 'Отделение «На Большой Семеновской» Ул.Большая Семеновская, 38; ауд.В - 107. Тел. (495) 223-05 - 23, доб. 1105, 1175; crs- bs@mospolytech.ru',
                    },
                    {
                        id: 1,
                        title: 'Отделение «На Автозаводской» ул.Автозаводская, 16, ауд. 2315. Тел. (495) 223-05 - 23, доб. 2256, 2257, 2285, 2240; crs- av@mospolytech.ru',
                    },
                    {
                        id: 2,
                        title: 'Отделение «На Павла Корчагина» Ул.Павла Корчагина, 22, ауд. 213. Тел. (495) 223-05 - 23, доб. 3230, 3110, 3114, 3043, 3044, 4054, 4068; crs- pk@mospolytech.ru',
                    },
                    {
                        id: 3,
                        title: 'Отделение «На Прянишникова» ул.Прянишникова, 2а, ауд. 1311. Тел. (495) 223-05 - 23 доб. 4052, 4060, 4056, 4057, 4059, 4061; crs- pryaniki@mospolytech.ru, crs - mikhalka@mospolytech.ru',
                    },
                ],
            },
            {
                title: 'Место предоставления справки',
                type: 'select',
                width: '100',
                fieldName: 'place_reference',
                value: null,
                editable: true,
                required: true,
                items: SocialPlaceOfReferenceOptions,
            },
            {
                title: 'Количество экземпляров справки',
                type: 'select',
                width: '100',
                fieldName: 'number_copies',
                value: null,
                editable: true,
                required: true,
                items: NumberOfCopiesOptions,
            },
            {
                title: 'Комментарий к заявке',
                type: 'textarea',
                fieldName: 'comment',
                value: '',
                editable: true,
            },
        ],
    }
}

export default getForm
