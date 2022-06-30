import { IInputArea } from '@ui/input-area/model'

const justificationGrantOptions = [
    {
        id: 0,
        title: 'Нуждающиеся в дорогостоящем лечении и (или) восстановлении здоровья, в том числе в компенсации расходов на операцию, приобретение дорогостоящих медикаментов при наличии соответствующих медицинских рекомендаций, проведении необходимых платных медицинских осмотров и обследований, профилактических прививок',
    },
    { id: 1, title: 'Дети-сироты и дети, оставшиеся без попечения родителей' },
    { id: 2, title: 'Лица из числа детей-сирот и детей, оставшихся без попечения родителей' },
    { id: 3, title: 'Потерявшие в период обучения обоих или единственного родителя' },
]

const structuralSubdivisionOptions = [
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

const getForm = (): IInputArea => {
    return {
        title: 'Заявка на оказание материальной помощи',
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
                title: 'Факультет (институт)/структурное подразделение:',
                fieldName: 'structuralSubdivision',
                type: 'radio',
                value: null,
                editable: true,
                required: true,
                items: structuralSubdivisionOptions,
            },
            {
                title: 'Основания для получения материальной помощи:',
                fieldName: 'justificationGrant',
                value: '',
                type: 'multiselect',
                width: '100%',
                editable: true,
                required: true,
                items: justificationGrantOptions,
            },
            {
                title: 'Прошу оказать мне материальную помощь из средств стипендиального фонда университета в связи:',
                fieldName: 'reason',
                type: 'textarea',
                value: '',
                editable: true,
                required: true,
                placeholder: 'Укажите причину',
            },
        ],
        links: [
            {
                title: 'Необходимо загрузить следующие документы',
                link: 'https://e.mospolytech.ru/old/storage/files/matpom_docs.pdf',
                type: 'document',
            },
        ],
        documents: { files: [], fieldName: 'docs', maxFiles: 4, required: true },
        alert: 'Загрузите документы, подтверждающие право на получение материальной помощи',
    }
}

export default getForm
