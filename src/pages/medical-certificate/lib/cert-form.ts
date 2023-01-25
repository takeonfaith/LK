import getDelayInDays from '@pages/hr-applications/lib/get-delay-in-days'
import { IInputArea } from '@shared/ui/input-area/model'

// add data
interface Args {
    config: {
        title: string
        issueDateFieldName: string
        organizationFieldName: string
        docsFieldName: string
    }
}

export const getCertForm = ({ config }: Args): IInputArea => {
    return {
        title: config.title,
        data: [
            {
                title: 'Дата выдачи',
                type: 'date',
                value: '',
                editable: true,
                fieldName: config.issueDateFieldName,
                required: true,
                minValueInput: getDelayInDays(-30 * 11),
                maxValueInput: getDelayInDays(0),
            },
            {
                title: 'Организация, выдавшая справку',
                type: 'textarea',
                fieldName: config.organizationFieldName,
                value: '',
                editable: true,
                required: true,
            },
        ],
        documents: {
            files: [],
            fieldName: config.docsFieldName,
            required: true,
            maxFiles: 1,
            allowedTypes: ['application/pdf'],
        },
    }
}
