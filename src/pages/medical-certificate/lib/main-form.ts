import { UserApplication } from '@shared/api/model'
import { IInputArea } from '@shared/ui/input-area/model'

const dormLocations = [
    { id: 0, title: 'г. Москва, ул. Малая Семеновская, д. 12' },
    { id: 1, title: 'г. Москва, ул. 7-я Парковая, д. 9/26' },
    { id: 2, title: 'г. Москва, ул. 1-я Дубровская, д. 16А, стр. 2' },
    { id: 3, title: 'г. Москва, ул. 800-летия Москвы, д. 28, к.' },
    { id: 4, title: 'г. Москва, ул. Михалковская, д. 7, корп. 3' },
    { id: 5, title: 'г. Москва, ул. Бориса Галушкина, д. 9' },
    { id: 6, title: 'г. Москва, ул. Павла Корчагина, д. 20А, к. 3' },
    { id: 7, title: 'г. Москва, Рижский проезд, д. 15, к. 2' },
    { id: 8, title: 'г. Москва, Рижский проезд, д. 15, к. 1' },
    { id: 9, title: 'г. Москва, 1-й Балтийский переулок, д. 6/21, к. 3' },
]

export const getForm = (dataUserApplication: UserApplication): IInputArea => {
    const { phone, email } = dataUserApplication

    return {
        title: 'Предоставление медицинских справок',
        data: [
            {
                title: 'ФИО',
                value: `${dataUserApplication.surname} ${dataUserApplication.name} ${dataUserApplication.patronymic}`,
                fieldName: 'fio',
                width: '100%',
                editable: false,
            },
            {
                title: 'Телефон',
                value: phone,
                fieldName: 'phone',
                type: 'tel',
                width: '100%',
                editable: true,
                required: true,
                mask: true,
            },
            {
                title: 'Email',
                value: email,
                fieldName: 'email',
                type: 'email',
                width: '100%',
                editable: true,
                required: true,
            },
            {
                title: 'Адрес общежития',
                value: null,
                fieldName: 'address',
                type: 'select',
                items: dormLocations,
                width: '100%',
                editable: true,
                required: true,
            },
            {
                title: 'Комната',
                fieldName: 'room',
                value: '',
                editable: true,
                required: true,
            },
        ],
    }
}
