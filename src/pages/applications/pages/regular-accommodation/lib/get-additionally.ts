import { IInputArea } from '@ui/input-area/model'

const getAdditionally = (): IInputArea => {
    return {
        title: 'Дополнительно',
        data: [
            {
                title: 'Комментарий',
                type: 'textarea',
                fieldName: 'commentary',
                value: '',
                editable: true,
            },
        ],
        documents: {
            files: [],
            required: true,
            fieldName: 'personalDataFiles',
            maxFiles: 5,
        },
    }
}

export default getAdditionally
