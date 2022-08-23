import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    const { surname, name, patronymic, group, email, phone } = dataUserApplication
    return {
        title: 'Расторжение договора найма',
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
                mask: true,
                value: phone,
                editable: true,
                required: true,
            },
            {
                title: 'Номер договора',
                fieldName: 'contract_number',
                value: '',
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
