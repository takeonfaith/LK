import { CheckboxDocs, IInputArea } from '@ui/input-area/model'
import { User } from '@api/model'

const extracurricularActivities: CheckboxDocs[] = [
    {
        value: false,
        title: 'Общественная',
        files: [],
        maxFiles: 10,
        required: false,
        fieldName: 'society',
        checkboxCondition: 'straight',
    },
    {
        value: false,
        title: 'Научная',
        files: [],
        maxFiles: 10,
        required: false,
        fieldName: 'science',
        checkboxCondition: 'straight',
    },
    {
        value: false,
        title: 'Спортивная',
        files: [],
        maxFiles: 10,
        required: false,
        fieldName: 'sport',
        checkboxCondition: 'straight',
    },
    {
        value: false,
        title: 'Творческая',
        files: [],
        maxFiles: 10,
        required: false,
        fieldName: 'creativity',
        checkboxCondition: 'straight',
    },
]

const getForm = (data: User): IInputArea => {
    return {
        title: 'Переселение в другое общежитие',
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
                title: 'Общежитие',
                fieldName: 'hostel',
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
            {
                title: 'Комната',
                fieldName: 'room',
                value: '',
                editable: true,
                required: true,
            },
            {
                title: 'Причина переселения',
                value: '',
                fieldName: 'reason_for_relocation',
                editable: true,
                required: true,
            },
            {
                title: 'Участие во внеучебной деятельности',
                value: null,
                fieldName: 'extracurricular',
                type: 'checkbox-docs',
                items: extracurricularActivities,
                width: '100%',
                editable: true,
            },
        ],
    }
}

export default getForm
