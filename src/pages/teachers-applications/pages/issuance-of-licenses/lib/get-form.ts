import { IInputArea } from '@ui/input-area/model'
import getBasicFieldsApplicationTeacher from '@pages/teachers-applications/lib/get-basic-fields-application-teacher'
import { UserApplication } from '@api/model'

const getForm = (data: UserApplication): IInputArea => {
    return {
        title: 'Выдача лицензий и свидетельств о государственной аккредитации',
        data: [
            ...getBasicFieldsApplicationTeacher(data),
            {
                title: 'Документ',
                type: 'select',
                fieldName: 'document',
                value: null,
                editable: true,
                required: true,
                width: '100%',
                items: [
                    {
                        id: 0,
                        title: 'Лицензия на право ведения образовательной деятельности',
                    },
                    {
                        id: 1,
                        title: 'Свидетельство о государственной аккредитации',
                    },
                    {
                        id: 2,
                        title: 'Лицензия на право ведения образовательной деятельности и свидетельство о государственной аккредитации',
                    },
                ],
            },
            {
                title: 'Университет',
                type: 'select',
                fieldName: 'university',
                value: null,
                editable: true,
                required: true,
                width: '100%',
                items: [
                    {
                        id: 0,
                        title: 'Московский государственный машиностроительный университет» (МАМИ)',
                    },
                    {
                        id: 1,
                        title: 'Московский государственный открытый университет им. В.С. Черномырдина» (МГОУ)',
                    },
                    {
                        id: 2,
                        title: 'Московский государственный вечерний металлургический институт» (МГВМИ)',
                    },
                    {
                        id: 3,
                        title: 'Московский государственный университет инженерной экологии» (МГУИЭ)',
                    },
                    {
                        id: 4,
                        title: 'Московский государственный индустриальный университет» (МГИУ)',
                    },
                    {
                        id: 5,
                        title: 'Московский государственный университет печати имени Ивана Фёдорова» (МГУП)',
                    },
                ],
            },
            {
                title: 'Период',
                type: 'text',
                value: '',
                editable: true,
                fieldName: 'period',
                required: true,
            },
            {
                title: 'Количество копий',
                value: null,
                fieldName: 'number_copies',
                type: 'number',
                editable: true,
                required: true,
            },
            {
                title: 'Способ получения справки',
                type: 'radio',
                fieldName: 'method_obtaining',
                value: null,
                editable: true,
                required: true,
                items: [
                    {
                        id: 7,
                        title: 'На электронную почту',
                    },
                    {
                        id: 10,
                        title: 'Получить в МФЦ/отделе',
                    },
                ],
            },
            {
                title: 'Комментарий к заявке',
                type: 'textarea',
                fieldName: 'commentary',
                value: '',
                editable: true,
            },
        ],
        documents: { files: [], fieldName: 'docs', maxFiles: 6, required: false },
    }
}

export default getForm
