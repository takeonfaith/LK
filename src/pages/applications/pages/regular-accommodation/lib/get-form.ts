import { IInputArea } from '@ui/input-area/model'
import { User } from '@api/model'

const getForm = (data: User): IInputArea => {
    return {
        title: 'Предоставление права проживания (очная и очно-заочная форма)',
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
                title: 'Приоритетное общежитие',
                fieldName: 'priority_hostel',
                value: '',
                type: 'select',
                width: '100%',
                editable: true,
                required: true,
                items: [
                    {
                        id: 0,
                        title: '1 общежитие',
                    },
                    {
                        id: 1,
                        title: '2 общежитие',
                    },
                    {
                        id: 2,
                        title: '3 общежитие',
                    },
                    {
                        id: 3,
                        title: '4 общежитие',
                    },
                    {
                        id: 4,
                        title: '5 общежитие',
                    },
                    {
                        id: 5,
                        title: '6 общежитие',
                    },
                    {
                        id: 6,
                        title: '7 общежитие',
                    },
                    {
                        id: 7,
                        title: '8 общежитие',
                    },
                    {
                        id: 8,
                        title: '9 общежитие',
                    },
                    {
                        id: 9,
                        title: '10 общежитие',
                    },
                ],
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
