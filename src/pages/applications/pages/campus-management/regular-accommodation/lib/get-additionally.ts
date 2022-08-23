import { IInputArea } from '@ui/input-area/model'

const getAdditionally = (): IInputArea => {
    return {
        title: 'Дополнительно',
        data: [
            {
                title: 'Комментарий',
                type: 'textarea',
                fieldName: 'comment',
                value: '',
                editable: true,
            },
        ],
        documents: {
            files: [],
            required: true,
            fieldName: 'docs',
            maxFiles: 5,
        },
    }
}

export default getAdditionally
