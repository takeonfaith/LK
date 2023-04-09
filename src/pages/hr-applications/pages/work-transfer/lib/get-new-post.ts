import { IInputArea } from '@ui/input-area/model'

const geOldPost = (): IInputArea => {
    return {
        title: 'Новое место работы',
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
            {
                title: 'Тип занятости',
                type: 'select',
                fieldName: 'employment',
                value: null,
                editable: true,
                required: true,
                width: '100%',
                items: [
                    {
                        id: 0,
                        title: 'Основное',
                    },
                    {
                        id: 1,
                        title: 'По совместительству',
                    },
                ],
            },
            {
                title: 'Тип совместительства',
                type: 'select',
                fieldName: 'parttime_type',
                value: null,
                editable: true,
                required: true,
                specialType: 'PartTime',
                width: '100%',
                items: [
                    {
                        id: 0,
                        title: 'Внутреннее',
                    },
                    {
                        id: 1,
                        title: 'Внешнее',
                    },
                ],
            },
        ],
    }
}

export default geOldPost
