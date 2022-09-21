import { IInputArea } from '@ui/input-area/model'

const getOldPost = (): IInputArea => {
    return {
        title: 'Старое:',
        data: [
            {
                title: 'Подразделение',
                value: null,
                fieldName: 'exPlaceOfWork',
                editable: true,
                mask: true,
                required: true,
            },
            {
                title: 'Должность',
                value: null,
                fieldName: 'exPost',
                editable: true,
                mask: true,
                required: true,
            },
            {
                title: 'Ставка',
                type: 'select',
                fieldName: 'exRate',
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

export default getOldPost
