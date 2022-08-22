import { IInputArea } from '@ui/input-area/model'

const methodOfObtainingOptions = [
    { id: 0, title: 'На электронную почту' },
    { id: 1, title: 'Лично' },
    { id: 3, title: 'На почтовый адрес' },
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

const getForm = (): IInputArea => {
    return {
        title: 'Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования',
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
