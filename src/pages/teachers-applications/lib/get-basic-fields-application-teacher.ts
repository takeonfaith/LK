import { UserApplication } from '@api/model'
import { IInputAreaData } from '@ui/input-area/model'
import { getFormattedSubDivisions } from '@features/applications/lib/get-subdivisions'

const getBasicFieldsApplicationTeacher = (dataForm: UserApplication): IInputAreaData[] => {
    const { surname, name, patronymic, email, phone, subdivisions } = dataForm
    return [
        {
            title: 'ФИО',
            value: surname + ' ' + name + ' ' + patronymic,
            fieldName: 'fio',
            mask: true,
            editable: false,
            required: true,
        },
        {
            title: 'Подразделение/должность',
            value: null,
            fieldName: 'guid_worker',
            editable: true,
            width: '100',
            required: !!subdivisions?.length,
            type: 'select',
            items: getFormattedSubDivisions(subdivisions),
        },
        {
            title: 'E-mail',
            type: 'email',
            value: email,
            editable: true,
            fieldName: 'email',
            required: true,
        },
        {
            title: 'Контактный телефон',
            type: 'tel',
            value: phone,
            fieldName: 'phone_private',
            editable: true,
            mask: true,
            required: true,
        },
        {
            title: 'Служебный мобильный телефон',
            type: 'tel',
            value: '',
            fieldName: 'phone_staff',
            editable: true,
            mask: true,
        },
    ]
}

export default getBasicFieldsApplicationTeacher
