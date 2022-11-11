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
        title: 'Предоставление права проживания (очная форма)',
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
                items: [
                    {
                        id: 0,
                        title: '1 общежитие',
                    },
                    {
                        id: 1,
                        title: '2 общежитие',
                    },
                    {
                        id: 2,
                        title: '3 общежитие',
                    },
                    {
                        id: 3,
                        title: '4 общежитие',
                    },
                    {
                        id: 4,
                        title: '5 общежитие',
                    },
                    {
                        id: 5,
                        title: '6 общежитие',
                    },
                    {
                        id: 6,
                        title: '7 общежитие',
                    },
                    {
                        id: 7,
                        title: '8 общежитие',
                    },
                    {
                        id: 8,
                        title: '9 общежитие',
                    },
                    {
                        id: 9,
                        title: '10 общежитие',
                    },
                ],
            },
        ],
    }
}

export default getForm
