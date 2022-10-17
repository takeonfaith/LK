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
    }
}

export default getAdditionally
