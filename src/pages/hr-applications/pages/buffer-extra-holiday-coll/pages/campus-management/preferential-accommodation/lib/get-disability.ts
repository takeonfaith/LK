import { IInputArea } from '@ui/input-area/model'

const getDisability = (): IInputArea => {
    return {
        title: 'Соответствие льготной категории граждан',
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
    }
}

export default getDisability
