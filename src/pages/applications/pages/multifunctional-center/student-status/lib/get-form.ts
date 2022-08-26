import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'

const methodObtainingOptions = [
    {
        id: 0,
        title: 'На электронную почту',
    },
    {
        id: 1,
        title: 'Лично',
        data: [
            {
                title: 'Выберите структурное подразделение для обращения',
                type: 'radio',
                fieldName: 'stucturalSubdivision',
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
        ],
    },
    {
        id: 3,
        title: 'На почтовый адрес',
        data: [
            {
                title: 'Комментарий к заявке',
                fieldName: 'address',
                value: '',
                editable: true,
            },
        ],
    },
]

const PlaceOfReferenceOptions = [
    { id: 0, title: 'по месту требования' },
    { id: 1, title: 'работодателю' },
    { id: 2, title: 'на работу родителям' },
    { id: 3, title: 'в визовый центр' },
    { id: 4, title: 'в Федеральную налоговую службу (ФНС)' },
    { id: 5, title: 'в Федеральную службу охраны (ФСО)' },
    { id: 6, title: 'в Федеральную службу безопасности (ФСБ)' },
    { id: 7, title: 'в ОАО «РЖД»' },
    { id: 8, title: 'в музей' },
    { id: 9, title: 'в посольство' },
    { id: 10, title: 'в школу' },
    { id: 11, title: 'в управляющую компанию (УК)' },
]

const NumberOfCopiesOptions = [
    { id: 1, title: '1' },
    { id: 2, title: '2' },
    { id: 3, title: '3' },
]

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    return {
        title: 'Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования',
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
                title: 'Способ получения справки',
                type: 'radio',
                fieldName: 'method_obtaining',
                value: '',
                editable: true,
                required: true,
                items: methodObtainingOptions,
            },
            {
                title: 'Место предоставления справки:',
                type: 'select',
                width: '100',
                fieldName: 'place_reference',
                value: null,
                editable: true,
                required: true,
                items: PlaceOfReferenceOptions,
            },
            {
                title: 'Количество копий',
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
