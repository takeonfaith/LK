import { IInputArea } from '@ui/input-area/model'

const getForm = (): IInputArea => {
    return {
        title: 'Справка-вызов',
        data: [
            {
                title: 'Телефон',
                type: 'tel',
                mask: true,
                fieldName: 'phone',
                value: '',
                editable: true,
                required: true,
            },
            {
                title: 'Email',
                type: 'email',
                fieldName: 'email',
                value: '',
                editable: true,
                required: true,
            },
            {
                title: 'Выберите отделение МФЦ, где желаете получить готовый документ',
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
            {
                title: 'Перидо времени - с:',
                type: 'date',
                fieldName: 'time-before',
                value: '',
                editable: true,
                required: true,
            },
            {
                title: 'по:',
                type: 'date',
                fieldName: 'time-after',
                value: '',
                editable: true,
                required: true,
            },
            {
                title: 'Комментарий к заявке',
                type: 'textarea',
                fieldName: 'comment',
                value: '',
                editable: true,
            },
        ],
        hint: 'При необходимости получения скана готового документа по электронной почте или оригинала по обычной почте укажите это в поле комментария. Для получения оргигинала укажите также ваш почтовый адрес, включая индекс.',
    }
}

export default getForm
