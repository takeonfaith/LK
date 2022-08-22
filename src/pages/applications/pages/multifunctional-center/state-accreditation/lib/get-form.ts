import { IInputArea } from '@ui/input-area/model'

const methodOfObtainingOptions = [
    { id: 0, title: 'На электронную почту' },
    { id: 1, title: 'Лично' },
    { id: 3, title: 'На почтовый адрес' },
]

const documentOptions = [
    { id: 0, title: 'Лицензия на право ведения образовательной деятельности' },
    { id: 1, title: 'Свидетельство о государственной аккредитации' },
    {
        id: 3,
        title: 'Лицензия на право ведения образовательной деятельности и свидетельство о государственной аккредитации',
    },
]

const NumberOfCopiesOptions = [
    { id: 1, title: '1' },
    { id: 2, title: '2' },
    { id: 3, title: '3' },
    { id: 4, title: '4' },
    { id: 5, title: '5' },
    { id: 6, title: '6' },
    { id: 7, title: '7' },
    { id: 8, title: '8' },
    { id: 9, title: '9' },
]

const getForm = (): IInputArea => {
    return {
        title: 'Выдача лицензий и свидетельств о государственной аккредитации',
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
                title: 'Способ получения справки',
                type: 'radio',
                fieldName: 'method_obtaining',
                value: null,
                editable: true,
                required: true,
                items: methodOfObtainingOptions,
            },
            {
                title: 'Документ',
                type: 'select',
                width: '100',
                fieldName: 'document',
                value: null,
                editable: true,
                required: true,
                items: documentOptions,
            },
            {
                title: 'Период',
                type: 'date-interval',
                value: ['', ''],
                editable: true,
                fieldName: 'period',
                required: true,
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
        documents: { files: [], fieldName: 'docs', maxFiles: 6, required: false },
    }
}

export default getForm
