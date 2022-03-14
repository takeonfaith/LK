import { TeacherDataVerification } from '@api/model'
import { IInputArea } from '@ui/input-area/model'

const getRegistration = (data: TeacherDataVerification): IInputArea => {
    return {
        title: 'Регистрация',
        hint: 'Необходимо приложить скан-копию 5 страницы или последующих страниц с соответствующими штампами паспорта РФ. При отсутствии регистрации также прикладывается скан-копия. Для иностранных работников - необходимо приложить скан-копию документа о регистрации на территории РФ.',
        data: [
            {
                fieldName: 'reg_addr',
                title: 'Адрес регистрации',
                value: data?.reg_addr ?? '',
                required: true,
            },
            {
                fieldName: 'reg_date',
                title: 'Дата регистрации',
                value: data?.reg_date ?? '',
                type: 'date',
                required: true,
            },
        ],
        documents: {
            files: [],
            required: true,
            fieldName: 'personalDataFiles',
            maxFiles: 2,
        },
        optionalCheckbox: {
            fieldName: 'reg_none',
            title: 'Регистрация отсутствует',
            value: false,
        },
        confirmed: false,
    }
}

export default getRegistration
