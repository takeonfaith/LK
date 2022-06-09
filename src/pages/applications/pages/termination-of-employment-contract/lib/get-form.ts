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
                fieldName: '',
                type: 'tel',
                value: data.group,
                editable: false,
            },
            {
                title: 'Электронная почта',
                fieldName: 'post',
                type: 'email',
                value: 'email',
                editable: true,
                required: true,
            },
            {
                title: 'Телефон',
                fieldName: 'tel_mob_private',
                type: 'tel',
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
            {
                title: 'С порядком выселения ознакомлен(а)',
                type: 'checkbox',
                value: '',
                fieldName: 'isFamiliar',
                editable: true,
                required: true,
            },
        ],
    }
}
export default getForm
