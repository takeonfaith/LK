import { IInputArea } from '@ui/input-area/model'
import { User } from '@api/model'

const getForm = (data: User): IInputArea => {
    return {
        title: 'Расторжение договора найма',
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
                mask: true,
                value: '8 999 999 99 99',
                editable: true,
                required: true,
            },
            {
                title: 'Номер договора',
                fieldName: 'contract_number',
                value: '008877',
                editable: true,
                required: true,
            },
            {
                title: 'Дата договора',
                type: 'date',
                fieldName: 'contract_date',
                value: '',
                editable: true,
                required: true,
            },
            {
                title: 'Планируемая дата расторжения договора найма и выселения из общежития',
                type: 'date',
                fieldName: 'termination_date',
                value: '',
                editable: true,
                required: true,
            },
        ],
        optionalCheckbox: {
            title: 'С порядком выселения ознакомлен(а)',
            value: false,
            fieldName: 'isFamiliar',
        },
    }
}
export default getForm
