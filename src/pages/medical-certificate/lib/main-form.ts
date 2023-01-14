import { UserApplication } from '@shared/api/model'
import { IInputArea } from '@shared/ui/input-area/model'

const dormLocations = [
    { id: 0, title: 'ул. Михалковская, д. 7, корп. 3' },
    { id: 1, title: 'ул. Малая Семеновская, д. 12' },
]

export const getForm = (dataUserApplication: UserApplication): IInputArea => {
    const { phone, email } = dataUserApplication

    return {
        title: 'Загрузка медицинских справок',
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
