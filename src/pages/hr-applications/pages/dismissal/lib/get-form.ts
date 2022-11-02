import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'
import getDelayInDays from '@pages/hr-applications/lib/get-delay-in-days'

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    const { surname, name, patronymic } = dataUserApplication
    return {
        title: 'Заявление на увольнение',
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
                title: 'Дата увольнения (последний рабочий день)',
                type: 'date',
                value: '',
                fieldName: 'last_day',
                editable: true,
                mask: true,
                required: true,
                minValueInput: getDelayInDays(14),
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
                title: 'Способ получения трудовой книжки',
                type: 'select',
                fieldName: 'get_tk',
                value: null,
                editable: true,
                required: true,
                width: '100%',
                items: [
                    {
                        id: 0,
                        title: 'Очно',
                    },
                    {
                        id: 1,
                        title: 'По почте',
                    },
                ],
            },
            {
                title: 'Адрес для отправки трудовой книжки',
                value: '',
                fieldName: 'get_tk_address',
                editable: true,
                mask: true,
                required: false,
                specialType: 'Address',
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
