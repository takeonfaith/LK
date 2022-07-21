import { IInputArea } from '@ui/input-area/model'
import { User } from '@api/model'

const getForm = (data: User): IInputArea => {
    return {
        title: 'Предоставление права проживания (заочная форма)',
        data: [
            {
                title: 'ФИО',
                fieldName: 'fio',
                value: data.surname + ' ' + data.name + ' ' + data.patronymic,
                editable: false,
            },
            {
                title: 'Учебная группа',
                fieldName: 'group',
                type: 'tel',
                value: data.group,
                editable: false,
            },
            {
                title: 'Электронная почта',
                fieldName: 'email',
                type: 'email',
                value: 'email',
                editable: true,
                required: true,
            },
            {
                title: 'Телефон',
                fieldName: 'phone',
                type: 'tel',
                value: '8 999 999 99 99',
                editable: true,
                required: true,
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
