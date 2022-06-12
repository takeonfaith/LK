import { IInputArea } from '@ui/input-area/model'

const getMilitaryService = (): IInputArea => {
    return {
        title: 'Военная служба',
        hint: 'Необходимо приложить скан-копию справки об инвалидности',
        data: [
            {
                title: 'Начало периода соответствия льготной категории',
                type: 'date',
                value: '',
                fieldName: 'beginning_of_benefit_period',
                required: true,
            },
            {
                title: 'Окончание периода соответствия льготной категории',
                type: 'date',
                value: '',
                fieldName: 'end_of_benefit_period',
                required: true,
            },
        ],
        optionalCheckbox: {
            fieldName: 'is_not_invalid',
            value: false,
            title: 'Нет документа о прохождении военной службы',
            required: true,
        },
        documents: { files: [], required: true, checkboxCondition: 'reverse', fieldName: 'invalidFiles', maxFiles: 1 },
        confirmed: false,
    }
}

export default getMilitaryService
