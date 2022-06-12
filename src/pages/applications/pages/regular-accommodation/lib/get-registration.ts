import { IInputArea } from '@ui/input-area/model'

const getRegistration = (): IInputArea => {
    return {
        title: 'Адрес регистрации',
        hint: 'Необходимо приложить скан-копию 5 страницы или последующих страниц с соответствующими штампами паспорта РФ. При отсутствии регистрации также прикладывается скан-копия. Для иностранных работников - необходимо приложить скан-копию документа о регистрации на территории РФ.',
        data: [],
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
            required: true,
        },
        confirmed: false,
    }
}

export default getRegistration
