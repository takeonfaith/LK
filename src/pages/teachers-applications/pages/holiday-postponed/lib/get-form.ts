import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    const { surname, name, patronymic } = dataUserApplication
    return {
        title: 'Заявление на перенос отпуска',
        data: [
            {
                title: 'ФИО',
                value: surname + ' ' + name + ' ' + patronymic,
                fieldName: 'fio',
                mask: true,
                editable: true,
                required: true,
            },
            {
                title: 'Должность',
                value: null,
                fieldName: 'post',
                editable: true,
                mask: true,
                required: true,
            },
            {
                title: 'Причина переноса',
                value: null,
                fieldName: 'reason',
                editable: true,
                mask: true,
                required: true,
            },
            {
                title: 'Период отпуска (до переноса) - с:',
                type: 'date',
                value: '',
                fieldName: 'begin_before_postpone',
                editable: true,
                mask: true,
                required: true,
            },
            {
                title: 'по',
                type: 'date',
                value: '',
                fieldName: 'end_before_postpone',
                editable: true,
                mask: true,
                required: true,
            },
            {
                title: 'Период отпуска (после переноса) - с:',
                type: 'date',
                value: '',
                fieldName: 'begin_after_postpone',
                editable: true,
                mask: true,
                required: true,
            },
            {
                title: 'по',
                type: 'date',
                value: '',
                fieldName: 'end_after_postpone',
                editable: true,
                mask: true,
                required: true,
            },
            {
                title: 'Место работы',
                type: 'select',
                fieldName: 'employment',
                value: null,
                editable: true,
                required: true,
                width: '100%',
                items: [
                    {
                        id: 0,
                        title: 'Основное',
                    },
                    {
                        id: 1,
                        title: 'По совместительству',
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
    }
}

export default getForm
