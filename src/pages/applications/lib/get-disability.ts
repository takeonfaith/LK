import { IInputArea } from '@ui/input-area/model'

const getDisability = (): IInputArea => {
    return {
        title: 'Период предоставления льготы',
        hint: 'Период предоставления льготы по плате за пользование жилым помещением соответствует дате подачи заявки и дате окончания действия документа',
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
            {
                title: 'Отсутствует срок действия документа (бессрочный)',
                type: 'checkbox',
                value: '',
                fieldName: 'is_indefinite',
                editable: true,
                required: false,
            },
        ],
        documents: {
            files: [],
            required: true,
            checkboxCondition: 'reverse',
            fieldName: 'invalidFiles',
            maxFiles: 1,
            allowedTypes: ['application/pdf'],
        },
    }
}

export default getDisability
