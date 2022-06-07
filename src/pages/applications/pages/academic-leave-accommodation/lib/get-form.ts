import { IInputArea } from '@ui/input-area/model'
import { User } from '@api/model'

const getForm = (data: User): IInputArea => {
    return {
        title: 'Предоставление права проживания в период академического отпуска',
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
                title: 'Причина предоставления',
                type: 'select',
                width: '100%',
                value: '',
                fieldName: 'reason_for_providing',
                editable: true,
                required: true,
                items: [
                    {
                        id: 0,
                        title: 'По медицинским показаниям',
                    },
                    {
                        id: 1,
                        title: 'По обстоятельствам личного характера',
                    },
                ],
            },
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
                fieldName: 'commentary',
                value: '',
                editable: true,
            },
        ],
        documents: { files: [], fieldName: 'docs', maxFiles: 6, required: false },
    }
}

export default getForm
