import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'

const getForm = (dataUserApplication: UserApplication, suggestions: any): IInputArea => {
    const { surname, name, patronymic } = dataUserApplication

    return {
        title: 'Заявление на трудоустройство по совместительству',
        data: [
            {
                title: 'ФИО',
                value: surname + ' ' + name + ' ' + patronymic,
                fieldName: 'fio',
                type: 'simple-text',
                visible: true,
            },
            {
                title: 'Подразделениe, куда производится трудорустройство',
                type: 'auto-complete-input',
                fieldName: 'newPlaceOfWork',
                value: '',
                width: '100%',
                suggestions,
                required: true,
                mask: true,
                visible: true,
                placeholder: 'Начните вводить название подразделения',
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
                        title: '1',
                    },
                    {
                        id: 1,
                        title: '0.5',
                    },
                    {
                        id: 2,
                        title: '0.25',
                    },
                ],
            },
        ],
    }
}

export default getForm
