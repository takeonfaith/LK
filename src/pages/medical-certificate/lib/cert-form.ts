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
        documents: { files: [], fieldName: config.docsFieldName, required: true, maxFiles: 1 },
    }
}
