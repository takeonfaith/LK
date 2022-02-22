import { TeacherDataVerification } from '@api/model'
import { IInputArea } from '@ui/input-area/model'

const getLocation = (data: TeacherDataVerification): IInputArea => {
    return {
        title: 'Проживание',
        hint: 'Необходимо указать фактический адрес проживания',
        data: [
            { fieldName: 'loc_addr', title: 'Адрес проживания', value: data?.loc_addr ?? '', required: true },
            {
                fieldName: 'loc_date',
                title: 'Дата начала проживания',
                value: data?.loc_date ?? '',
                type: 'date',
                required: true,
            },
        ],
        optionalCheckbox: {
            fieldName: 'loc_match_reg',
            title: 'Адрес проживания совпадает с адресом регистрации',
            value: data.loc_match_reg,
            required: true,
        },
        confirmed: false,
    }
}

export default getLocation
