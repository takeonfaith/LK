import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    const { surname, name, patronymic } = dataUserApplication
    return {
        title: 'Заявление на перевод',
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
                title: 'Место работы после перевода',
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
                title: 'Тип совместительства (если в предыдущем пункте выбрано "по совместительству")',
                type: 'select',
                fieldName: 'parttime_type',
                value: null,
                editable: true,
                required: false,
                width: '100%',
                items: [
                    {
                        id: 0,
                        title: 'Внутреннее',
                    },
                    {
                        id: 1,
                        title: 'Внешнее',
                    },
                ],
            },
        ],
    }
}

export default getForm
