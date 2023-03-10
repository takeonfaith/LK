import { TeacherDataVerification } from '@api/model'
import findCurrentInSelect from '@ui/input-area/lib/find-current-in-select'
import { IInputArea } from '@ui/input-area/model'

const getFamilyStatusItems = (sex: 'Мужской' | 'Женский') => {
    switch (sex) {
        case 'Мужской':
            return [
                { id: 'single', title: 'Холост' },
                { id: 'married', title: 'Женат' },
                { id: 'divorced', title: 'Разведен' },
                { id: 'widow', title: 'Вдовец' },
            ]

        case 'Женский':
            return [
                { id: 'single', title: 'Не замужем' },
                { id: 'married', title: 'Замужем' },
                { id: 'divorced', title: 'Разведена' },
                { id: 'widow', title: 'Вдова' },
            ]
        default:
            return [
                { id: 'single', title: 'Холост/Не замужем' },
                { id: 'married', title: 'Женат/Замужем' },
                { id: 'divorced', title: 'Разведен/Разведена' },
                { id: 'widow', title: 'Вдовец/Вдова' },
            ]
    }
}

const getFamilyStatus = (data: TeacherDataVerification, isDone: boolean): IInputArea => {
    return {
        title: 'Семейное положение',
        hint: 'Необходимо указать актуальную информацию',
        data: [
            {
                // TODO: ??
                fieldName: 'familyStatus',
                title: '',
                value: findCurrentInSelect(getFamilyStatusItems(data.sex), data.familyStatus),
                type: 'select',
                items: getFamilyStatusItems(data.sex),
                width: '100%',
            },
        ],
        confirmed: isDone,
    }
}

export default getFamilyStatus
