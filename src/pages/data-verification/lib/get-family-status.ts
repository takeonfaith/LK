import { TeacherDataVerification } from '@api/model'
import { IInputArea } from '@ui/input-area/model'

const getFamilyStatusItems = (sex: 'Мужской' | 'Женский') => {
    switch (sex) {
        case 'Мужской':
            return [
                { id: 'not-chosen', title: 'Не выбрано' },
                { id: 'single', title: 'Холост' },
                { id: 'married', title: 'Женат' },
                { id: 'divorced', title: 'Разведен' },
                { id: 'widow', title: 'Вдовец' },
            ]

        case 'Женский':
            return [
                { id: 'not-chosen', title: 'Не выбрано' },
                { id: 'single', title: 'Не замужем' },
                { id: 'married', title: 'Замужем' },
                { id: 'divorced', title: 'Разведена' },
                { id: 'widow', title: 'Вдова' },
            ]
        default:
            return [
                { id: 'not-chosen', title: 'Не выбрано' },
                { id: 'single', title: 'Холост/Не замужем' },
                { id: 'married', title: 'Женат/Замужем' },
                { id: 'divorced', title: 'Разведен/Разведена' },
                { id: 'widow', title: 'Вдовец/Вдова' },
            ]
    }
}

const getFamilyStatus = (data: TeacherDataVerification): IInputArea => {
    return {
        title: 'Семейное положение',
        hint: 'Необходимо указать актуальную информацию',
        data: [
            {
                // TODO: ??
                fieldName: '',
                title: '',
                value: { id: 'not-chosen', title: 'Не выбрано' },
                type: 'select',
                items: getFamilyStatusItems(data.sex),
                width: '100%',
            },
        ],
        confirmed: false,
    }
}

export default getFamilyStatus
