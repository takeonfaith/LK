import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    const { surname, name, patronymic } = dataUserApplication
    return {
        title: 'Заявление на трудоустройство по совместительству',
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
                title: 'Ученая степень',
                value: null,
                fieldName: 'degree',
                editable: true,
                mask: true,
                required: false,
            },
            {
                title: 'Ученое звание',
                value: null,
                fieldName: 'academicTitle',
                editable: true,
                mask: true,
                required: false,
            },
            {
                title: 'Наименование учебной группы (для студентов), кафедры (для аспирантов)',
                value: null,
                fieldName: 'placeOfStudy',
                editable: true,
                mask: true,
                required: false,
            },
            {
                title: 'Полное наименование структурного подразделения, куда производится трудорустройство',
                value: null,
                fieldName: 'placeOfWork',
                editable: true,
                mask: true,
                required: true,
            },
            {
                title: 'Ставка',
                type: 'select',
                fieldName: 'rate',
                value: null,
                editable: true,
                required: true,
                width: '100%',
                items: [
                    {
                        id: 0,
                        title: '0.25',
                    },
                    {
                        id: 1,
                        title: '0.5',
                    },
                    {
                        id: 2,
                        title: '1',
                    },
                ],
            },
            {
                title: 'Должность',
                value: null,
                fieldName: 'post',
                mask: true,
                editable: true,
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
    }
}

export default getForm
