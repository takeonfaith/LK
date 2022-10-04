import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    const { surname, name, patronymic, group, email, phone } = dataUserApplication
    return {
        title: 'Предоставление права проживания в период академического отпуска',
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
                title: 'Причина предоставления академического отпуска',
                type: 'select',
                width: '100%',
                value: '',
                fieldName: 'reason',
                editable: true,
                required: true,
                items: [
                    {
                        id: 'medical indications',
                        title: 'По медицинским показаниям',
                    },
                    {
                        id: 'personal circumstances',
                        title: 'По обстоятельствам личного характера',
                    },
                ],
            },

            //            {
            //                 title: 'Выберите отделение МФЦ, где желаете получить готовый документ:',
            //                 type: 'radio',
            //                 fieldName: 'structural-subdivision',
            //                 value: null,
            //                 editable: true,
            //                 items: getDivisionsCrs(dataUserApplication.divisions_crs),
            //                 isSpecificRadio: true,
            //                 specialType: 'personalMethod',
            //             },
            {
                title: 'Период академического отпуска - с:',
                type: 'date',
                value: '',
                fieldName: 'begin_academic_leave_period',
                editable: true,
                required: true,
            },
            {
                title: 'по:',
                type: 'date',
                value: '',
                fieldName: 'end_academic_leave_period',
                editable: true,
                required: true,
            },
            {
                title: 'Комментарий',
                type: 'textarea',
                fieldName: 'comment',
                value: '',
                editable: true,
            },
        ],
        optionalCheckbox: {
            fieldName: 'is_not_document',
            value: false,
            title: 'Нет подтверждающего документа',
            required: true,
        },
        documents: { files: [], fieldName: 'docs', maxFiles: 6, required: true },
    }
}

export default getForm
