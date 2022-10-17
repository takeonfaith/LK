import { IInputArea } from '@ui/input-area/model'

const geOldPost = (): IInputArea => {
    return {
        title: 'Новое',
        data: [
            {
                title: 'Подразделение',
                value: null,
                fieldName: 'newPlaceOfWork',
                editable: true,
                mask: true,
                required: true,
            },
            {
                title: 'Должность',
                value: null,
                fieldName: 'newPost',
                editable: true,
                mask: true,
                required: true,
            },
            {
                title: 'Ставка',
                type: 'select',
                fieldName: 'newRate',
                value: null,
                editable: true,
                required: true,
                width: '100%',
                items: [
                    {
                        id: 0,
                        title: '0.25',
                    },
                    {
                        id: 1,
                        title: '0.5',
                    },
                    {
                        id: 2,
                        title: '1',
                    },
                ],
            },
        ],
    }
}

export default geOldPost
