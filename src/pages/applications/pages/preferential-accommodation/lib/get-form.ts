import { IInputArea } from '@ui/input-area/model'
import { User } from '@api/model'

const getForm = (data: User): IInputArea => {
    return {
        title: 'Предоставление права льготного проживания',
        hint: 'Необходимо прикрепить документ, подтверждающий соответствие льготной категории',
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
