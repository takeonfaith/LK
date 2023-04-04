import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'

const reasonItems = [
    {
        id: 0,
        title: 'имею постоянную регистрацию за пределами А-107 или не имею постоянную регистрацию',
    },
    {
        id: 1,
        title: 'имею постоянную регистрацию в пределах А-107',
    },
]

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    const { surname, name, patronymic, group, email, phone } = dataUserApplication
    return {
        title: 'Контактная информация',
        data: [
            {
                title: 'ФИО',
                fieldName: 'fio',
                value: surname + ' ' + name + ' ' + patronymic,
                editable: false,
            },
            {
                title: 'Учебная группа',
                fieldName: 'group',
                type: 'tel',
                value: group,
                editable: false,
            },
            {
                title: 'Электронная почта',
                fieldName: 'email',
                type: 'email',
                value: email,
                editable: true,
                required: true,
            },
            {
                title: 'Телефон',
                fieldName: 'phone',
                type: 'tel',
                value: phone,
                editable: true,
                required: true,
            },
            {
                title: 'Причина предоставления (в связи с)',
                type: 'select',
                width: '100%',
                value: null,
                fieldName: 'reason',
                placeholder: 'укажите причину',
                editable: true,
                required: true,
                items: reasonItems,
            },
            {
                title: 'Период проживания - с:',
                type: 'date',
                value: '',
                fieldName: 'begin_of_stay',
                editable: true,
                required: true,
            },
            {
                title: 'по:',
                type: 'date',
                value: '',
                fieldName: 'end_of_stay',
                editable: true,
                required: true,
            },
        ],
    }
}

export default getForm
