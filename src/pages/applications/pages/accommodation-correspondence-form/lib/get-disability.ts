import { IInputArea } from '@ui/input-area/model'

const getDisability = (): IInputArea => {
    return {
        title: 'Инвалидность',
        hint: 'Необходимо приложить скан-копию справки об инвалидности',
        data: [
            {
                title: 'Начало периода соответствия льготной категории',
                type: 'date',
                value: '',
                fieldName: 'beginning_of_benefit_period',
                editable: true,
                required: true,
            },
            {
                title: 'Окончание периода соответствия льготной категории',
                type: 'date',
                value: '',
                fieldName: 'end_of_benefit_period',
                editable: true,
                required: true,
            },
        ],
        optionalCheckbox: {
            fieldName: 'is_not_invalid',
            value: true,
            title: 'Нет документа об инвалидности',
            required: true,
        },
        documents: { files: [], required: true, checkboxCondition: 'reverse', fieldName: 'invalidFiles', maxFiles: 1 },
        confirmed: false,
    }
}

export default getDisability
