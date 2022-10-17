import { IInputArea } from '@ui/input-area/model'

const getRegistration = (): IInputArea => {
    return {
        title: 'Адрес регистрации',
        data: [],
        hint: 'Необходимо приложить скан-копию 2-3 страниц паспорта, а также страниц с регистрацией. Для иностранных студентов обязательно приложить перевод паспорта.',
        documents: {
            files: [],
            required: true,
            fieldName: 'registrationFiles',
            maxFiles: 5,
        },
    }
}

export default getRegistration
