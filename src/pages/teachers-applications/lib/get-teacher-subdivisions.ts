import { IInputAreaData } from '@ui/input-area/model'

const listTeacherMfc = [
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
]

const getTeacherSubdivisions = (): IInputAreaData[] => {
    return [
        {
            title: 'Выберите отделение МФЦ, где желаете получить готовый документ',
            type: 'radio',
            fieldName: 'structural-subdivision',
            value: null,
            editable: true,
            required: true,
            items: listTeacherMfc,
            specialType: 'personalMethod',
        },
    ]
}

export default getTeacherSubdivisions
