import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    const { surname, name, patronymic } = dataUserApplication
    return {
        title: 'Заявление о привлечении к работе в выходной день',
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
                title: 'Дата привлечения к работе',
                type: 'date',
                value: '',
                fieldName: 'holiday_work_date',
                editable: true,
                mask: true,
                required: true,
            },
            {
                title: 'Количество часов',
                type: 'number',
                value: '',
                fieldName: 'holiday_work_hours',
                editable: true,
                mask: true,
                required: true,
                minValueInput: 1,
                maxValueInput: 8,
            },
            {
                title: 'Причина',
                value: null,
                fieldName: 'reason',
                editable: true,
                mask: true,
                required: true,
            },
            {
                title: 'Компенсация',
                type: 'select',
                fieldName: 'compensation',
                value: null,
                editable: true,
                required: true,
                width: '100%',
                items: [
                    {
                        id: 0,
                        title: 'Оплатить работу в выходной день в двойном размере',
                    },
                    {
                        id: 1,
                        title: 'Оплатить работу в выходной день в одинарном размере с предоставлением другого дня отдыха',
                    },
                ],
            },
            {
                title: 'Дата дополнительного дня отдыха',
                type: 'date',
                value: '',
                fieldName: 'extra_holiday_date',
                editable: true,
                mask: true,
                required: false,
                specialType: 'Compensation',
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
