import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'
import listHostelsOptions from '@features/applications/lib/get-list-hostels'

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
                title: 'Приоритетное общежитие',
                fieldName: 'priority_hostel',
                value: '',
                type: 'select',
                width: '100%',
                editable: true,
                required: true,
                items: listHostelsOptions,
            },
        ],
    }
}

export default getForm
