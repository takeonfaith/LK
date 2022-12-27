export const ApplicationsConstants = {
    ready: 'Готово',
    pending: 'В работе',
    rejected: 'Отклонено',
}

export const hrApplicationsConstants = {
    agreeding: 'На согласовании',
    notAgreed: 'Не согласовано',
    agreed: 'Согласовано',
    empty: 'Не создано',
    rejected: 'Отклонено',
}
export const hrOrderConstants = {
    signed: 'Подписан',
    agreeding: 'На согласовании',
    fixing: 'На доработке',
    empty: 'Не создан',
}

export const NumberOfCopiesOptions = [
    { id: 1, title: '1' },
    { id: 2, title: '2' },
    { id: 3, title: '3' },
]

export const StructuralSubdivisionOptions = [
    {
        id: 0,
        title: 'Отделение «На Большой Семеновской» центра по работе со студентами Ул.Большая Семеновская, 38; ауд.В - 107. Тел. (495) 223-05 - 23, доб. 1105, 1175; crs- bs@mospolytech.ru',
    },
    {
        id: 1,
        title: 'Отделение «На Автозаводской» центра по работе со студентами ул.Автозаводская, 16, ауд. 2315. Тел. (495) 223-05 - 23, доб. 2256, 2257, 2285, 2240; crs- av@mospolytech.ru',
    },
    {
        id: 2,
        title: 'Отделение «На Павла Корчагина» центра по работе со студентами Ул.Павла Корчагина, 22, ауд. 213. Тел. (495) 223-05 - 23, доб. 3230, 3110, 3114, 3043, 3044, 4054, 4068; crs- pk@mospolytech.ru',
    },
    {
        id: 3,
        title: 'Отделение «На Прянишникова» центра по работе со студентами ул.Прянишникова, 2а, ауд. 1311. Тел. (495) 223-05 - 23 доб. 4052, 4060, 4056, 4057, 4059, 4061; crs- pryaniki@mospolytech.ru, crs - mikhalka@mospolytech.ru',
    },
]

export const MethodObtainingOptions = [
    { id: 0, title: 'На электронную почту' },
    { id: 1, title: 'Лично' },
    { id: 3, title: 'На почтовый адрес' },
]

export type specialFieldsNameT =
    | 'personalMethod'
    | 'postMethod'
    | 'personalNature'
    | 'Compensation'
    | 'Address'
    | 'collHoliday1'
    | 'collHoliday2'
    | 'collHoliday3'
    | 'collHoliday4'
    | 'collHoliday5'
    | 'Structure1'
    | 'Structure2'
    | null
