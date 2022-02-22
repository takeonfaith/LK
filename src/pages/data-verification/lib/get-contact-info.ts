import { TeacherDataVerification } from '@api/model'
import { IInputArea } from '@ui/input-area/model'

const getContactInfo = (data: TeacherDataVerification): IInputArea => {
    return {
        title: 'Контактные данные',
        hint: 'Личный мобильный телефон предоставляется только сотрудникам отдела кадров. Обязателен для заполнения. Рабочий мобильный телефон может быть предоставлен сотрудникам вуза для решения рабочих вопросов. Если рабочий мобильный телефон совпадает с личным - продублировать информацию в соответствующем поле. Служебный телефон (прямой/дополнительный) может быть опубликован в телефонном справочнике вуза. Личный E-mail предоставляется только сотрудникам отдела кадров. Обязателен для заполнения. Рабочий E-mail - это E-mail в домене mospolytech.ru.',
        data: [
            {
                fieldName: 'tel_mob_private',
                title: 'Мобильный телефон (личный)',
                type: 'tel',
                value: data?.tel_mob_private ?? '',
                required: true,
                mask: true,
            },
            {
                fieldName: 'tel_mob_staff',
                title: 'Мобильный телефон (рабочий)',
                type: 'tel',
                value: data?.tel_mob_staff ?? '',
                mask: true,
            },
            {
                fieldName: 'tel_staff',
                title: 'Служебный телефон (прямой/дополнительный)',
                type: 'tel',
                value: data?.tel_staff ?? '',
            },
            {
                fieldName: 'email_private',
                title: 'Личный e-mail',
                type: 'email',
                value: data?.email_private ?? '',
                required: true,
            },
            { fieldName: 'email_staff', title: 'Рабочий e-mail', type: 'email', value: data?.email_staff ?? '' },
        ],
        confirmed: false,
    }
}

export default getContactInfo
