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
                placeholder: 'Укажите причину в соответствии с приказом о предоставлении академического отпуска',
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
            {
                title: 'Дата начала академического отпуска',
                placeholder: 'Укажите дату в соответствии с приказом о предоставлении академического отпуска',
                type: 'date',
                value: '',
                fieldName: 'begin_academic_leave_period',
                editable: true,
                required: true,
            },
            {
                title: 'Дата окончания академического отпуска',
                placeholder: 'Укажите дату в соответствии с приказом о предоставлении академического отпуска',
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
                placeholder: 'Разъясните необходимость проживания в общежитии в период академического отпуска',
                required: true,
            },
        ],
        hint: 'В случае предоставления академического отпуска по медицинским показаниям необходимо загрузить подтверждающие медицинские документы.',
        optionalCheckbox: {
            fieldName: 'is_not_document',
            value: false,
            title: 'Нет подтверждающего документа',
            required: true,
        },
        documents: { files: [], fieldName: 'docs', required: true, maxFiles: 1, allowedTypes: ['application/pdf'] },
    }
}

export default getForm
