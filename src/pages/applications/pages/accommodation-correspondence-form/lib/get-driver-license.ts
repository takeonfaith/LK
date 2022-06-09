import { IInputArea } from '@ui/input-area/model'

const getDriverLicense = (): IInputArea => {
    return {
        title: 'Водительское удостоверение',
        hint: 'При наличии водительского удостоверения необходимо загрузить скан-копию документа с обеих сторон',
        data: [
            {
                title: 'Начало периода соответствия льготной категории',
                type: 'date',
                value: '',
                fieldName: 'beginning_of_benefit_period',
                editable: true,
                required: true,
            },
            {
                title: 'Окончание периода соответствия льготной категории',
                type: 'date',
                value: '',
                fieldName: 'end_of_benefit_period',
                editable: true,
                required: true,
            },
        ],
        optionalCheckbox: {
            fieldName: 'dr_lic_none',
            title: 'Водительское удостоверение отсутствует',
            value: false,
            required: true,
        },
        documents: { files: [], required: true, fieldName: 'driveLicenseFiles', maxFiles: 2 },
        confirmed: false,
    }
}

export default getDriverLicense
