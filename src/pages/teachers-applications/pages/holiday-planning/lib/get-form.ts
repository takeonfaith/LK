import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    const { surname, name, patronymic } = dataUserApplication
    return {
        title: 'Заявление о предоставлении отпуска',
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
                title: 'Наименование структурного подразделения',
                value: null,
                fieldName: 'structure',
                editable: true,
                mask: true,
                required: true,
            },
            {
                title: 'Вид отпуска',
                type: 'select',
                fieldName: 'holiday_type',
                value: null,
                editable: true,
                required: true,
                width: '100%',
                items: [
                    {
                        id: 0,
                        title: 'Ежегодный (основной) оплачиваемый отпуск',
                    },
                    {
                        id: 1,
                        title: 'Ежегодный дополнительный оплачиваемый отпуск (в т.ч. учебный)',
                    },
                    {
                        id: 2,
                        title: 'Отпуск без сохранения заработной платы',
                    },
                    {
                        id: 3,
                        title: 'Отпуск по беременности и родам (декретный отпуск)',
                    },
                    {
                        id: 4,
                        title: 'Отпуск по уходу за ребенком',
                    },
                ],
            },
            {
                title: 'Период отпуска с:',
                type: 'date',
                value: '',
                fieldName: 'begin_coll_holiday',
                editable: true,
                mask: true,
                required: true,
            },
            {
                title: 'по',
                type: 'date',
                value: '',
                fieldName: 'end_coll_holiday',
                editable: true,
                mask: true,
                required: true,
            },
            {
                title: 'Комментарий к заявке',
                type: 'textarea',
                fieldName: 'commentary',
                value: '',
                editable: true,
            },
        ],
        documents: {
            files: [],
            required: true,
            fieldName: 'holidayFiles',
            maxFiles: 10,
        },
    }
}

export default getForm
