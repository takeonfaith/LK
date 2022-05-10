import { Feedback } from '@api/model/feedback'
import { SelectPage } from '@features/select'
import { IInputArea } from '@ui/input-area/model'

const SELECT_OPTIONS: SelectPage[] = [
    { id: '1', title: 'Проблема с дистанционным обучением (LMS)' },
    { id: '2', title: 'Проблема со входом в личный кабинет' },
    { id: '3', title: 'Технические вопросы работы портала' },
    { id: '4', title: 'Проблема с электронными ведомостями' },
    { id: '5', title: 'Ошибки в кампусной карте' },
]

const getForm = (data: Feedback): IInputArea => {
    return {
        title: 'Да, я в курсе этого. Мой вопрос касается другой темы',
        data: [
            {
                title: 'ФИО',
                type: 'text',
                value: data?.fio ?? '',
                fieldName: 'fio',
                required: true,
            },
            {
                title: 'Почта',
                type: 'email',
                value: data?.email_private ?? '',
                fieldName: 'email_private',
                required: true,
            },
            {
                title: 'Телефон',
                type: 'tel',
                value: data?.tel_mob_private ?? '',
                fieldName: 'tel_mob_private',
                mask: true,
                required: true,
            },
            {
                title: 'Тематика обращения',
                type: 'select',
                width: '100%',
                value: SELECT_OPTIONS[0],
                items: SELECT_OPTIONS,
                fieldName: 'theme',
                required: true,
            },
            {
                title: 'Сообщение',
                type: 'textarea',
                value: '',
                fieldName: 'message',
                required: true,
            },
        ],
        collapsed: false,
    }
}

export default getForm
