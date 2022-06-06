import { IInputArea } from '@ui/input-area/model'

const getForm = (): IInputArea => {
    return {
        title: 'Вопрос по СЭД Directum и 1С',
        data: [
            {
                title: 'ФИО',
                value: null,
                fieldName: 'fio',
                mask: true,
                editable: true,
                required: true,
            },
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
            {
                title: 'Должность',
                value: null,
                fieldName: 'post',
                editable: true,
                mask: true,
                required: true,
            },
            {
                title: 'E-mail',
                type: 'email',
                value: '',
                editable: true,
                fieldName: 'email_private',
                required: true,
            },
            {
                title: 'Личный мобильный телефон',
                type: 'tel',
                value: '',
                fieldName: 'tel_mob_private',
                editable: true,
                mask: true,
                required: true,
            },
            {
                title: 'Служебный мобильный телефон',
                type: 'tel',
                value: '',
                fieldName: 'tel_mob_staff',
                editable: true,
                mask: true,
            },
            {
                title: 'Комментарий к заявке',
                type: 'textarea',
                fieldName: 'commentary',
                value: '',
                editable: true,
            },
        ],
        documents: { files: [], fieldName: 'docs', maxFiles: 6, required: false },
    }
}

export default getForm
