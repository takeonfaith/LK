import { ContactInfoActualization } from '@api/model'
import { IInputArea } from '@ui/input-area/model'

const getForm = (data: ContactInfoActualization): IInputArea => {
    return {
        title: 'Актуализация контактных данных',
        data: [
            {
                title: 'Личный мобильный телефон',
                type: 'tel',
                value: data?.tel_mob_private,
                fieldName: 'tel_mob_private',
                mask: true,
                required: true,
            },
            {
                title: 'Служебный мобильный телефон',
                type: 'tel',
                value: data?.tel_mob_staff,
                fieldName: 'tel_mob_staff',
                mask: true,
            },
            {
                title: 'Служебный телефон (прямой/дополнительный)',
                type: 'tel',
                value: data?.tel_staff,
                fieldName: 'tel_staff',
            },
            {
                title: 'Личный email',
                type: 'email',
                value: data.email_private,
                fieldName: 'email_private',
                required: true,
            },
            {
                title: 'Рабочий email',
                type: 'email',
                value: data.email_staff,
                fieldName: 'email_staff',
            },
            {
                title: 'Рабочий email',
                type: 'date-interval',
                value: data.email_staff,
                fieldName: 'email_staff',
            },
        ],
    }
}

export default getForm
