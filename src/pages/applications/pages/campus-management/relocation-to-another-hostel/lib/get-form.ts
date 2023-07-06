import { CheckboxDocs, IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'

const extracurricularActivities: CheckboxDocs[] = [
    {
        value: false,
        title: 'Общественная',
        files: [],
        maxFiles: 1,
        required: false,
        fieldName: 'society',
        checkboxCondition: 'straight',
        maxFileSizeInMegaBytes: 3,
    },
    {
        value: false,
        title: 'Научная',
        files: [],
        maxFileSizeInMegaBytes: 3,
        maxFiles: 1,
        required: false,
        fieldName: 'science',
        checkboxCondition: 'straight',
    },
    {
        value: false,
        title: 'Спортивная',
        files: [],
        maxFiles: 1,
        required: false,
        fieldName: 'sport',
        maxFileSizeInMegaBytes: 3,
        checkboxCondition: 'straight',
    },
    {
        value: false,
        title: 'Творческая',
        files: [],
        maxFiles: 1,
        required: false,
        maxFileSizeInMegaBytes: 3,
        fieldName: 'creativity',
        checkboxCondition: 'straight',
    },
]

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    const { surname, name, patronymic, group, email, phone } = dataUserApplication
    return {
        title: 'Переселение в другое общежитие (Подача заявок доступна с 08.06.2023 по 15.06.2023)',
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
                title: 'Общежитие',
                fieldName: 'hostel',
                value: '',
                type: 'select',
                width: '100%',
                editable: true,
                required: false,
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
                        title: '1 общежитие',
                    },
                ],
            },
            {
                title: 'Комната',
                placeholder: 'Укажите номер комнаты, в которую хотите переселиться',
                fieldName: 'room',
                value: '',
                editable: true,
                required: false,
            },
            {
                title: 'Участие во внеучебной деятельности (Общий объем файлов - 1мб.)',
                value: null,
                fieldName: 'extracurricular',
                type: 'checkbox-docs',
                items: extracurricularActivities,
                width: '10%',
                editable: true,
            },
            {
                title: 'Комментарий',
                placeholder: 'Укажите необходимость переселения',
                type: 'textarea',
                fieldName: 'comment',
                value: '',
                editable: true,
                required: true,
            },
        ],
        hint: 'Приложите грамоты, дипломы и другие документы, подтверждающие Вашу активную деятельность в университете.',
    }
}

export default getForm
