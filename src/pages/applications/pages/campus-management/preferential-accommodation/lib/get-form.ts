import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    const { surname, name, patronymic, group, email, phone } = dataUserApplication
    return {
        title: 'Предоставление права льготного проживания',
        hint: 'Необходимо прикрепить документ, подтверждающий соответствие льготной категории',
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
                width: '100%',
                value: '',
                fieldName: 'reason',
                placeholder: 'укажите причину',
                editable: true,
                required: true,
            },
            {
                title: 'Категория',
                fieldName: 'category',
                value: '',
                type: 'select',
                width: '100%',
                editable: true,
                required: true,
                items: [
                    {
                        id: 0,
                        title: '1 категория',
                    },
                    {
                        id: 1,
                        title: '2 категория',
                    },
                    {
                        id: 2,
                        title: '3 категория',
                    },
                ],
            },
        ],
        documents: { files: [], fieldName: 'docs', maxFiles: 6, required: true },
    }
}

export default getForm
