import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'
import { MethodObtainingOptions, NumberOfCopiesOptions } from '@entities/applications/consts'
import { getFormattedDivisions } from '@features/applications/lib/get-divisions'
import getAddressFields from '@features/applications/lib/get-address-fields'

const SocialPlaceOfReferenceOptions = [
    { id: 0, title: 'в Пенсионный фонд Российской Федерации (ПФР)' },
    { id: 1, title: 'в Управление социальной защиты населения (УСЗН)' },
    { id: 2, title: 'в военный комиссариат' },
    { id: 3, title: 'в Многофункциональный центр (МФЦ)' },
    { id: 4, title: 'в Федеральную налоговую службу (ФНС)' },
    { id: 5, title: 'в банк' },
    { id: 6, title: 'в Федеральную службу труда и занятости' },
    { id: 7, title: 'в отдел/орган опеки и попечительства' },
    { id: 8, title: 'в социальное учреждение' },
    { id: 9, title: 'по месту требования' },
]

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    return {
        title: 'Справка в социальные учреждения',
        data: [
            {
                title: 'Телефон',
                type: 'tel',
                mask: true,
                fieldName: 'phone',
                editable: true,
                required: true,
                value: dataUserApplication.phone,
            },

            {
                title: 'Email',
                type: 'email',
                fieldName: 'email',
                value: dataUserApplication.email,
                editable: true,
                required: true,
            },
            {
                title: 'Способ получения справки',
                type: 'radio',
                fieldName: 'method_obtaining',
                value: null,
                editable: true,
                required: true,
                items: MethodObtainingOptions,
            },
            {
                title: 'Выберите отделение МФЦ, где желаете получить готовый документ:',
                type: 'radio',
                fieldName: 'structural-subdivision',
                value: null,
                editable: true,
                items: getFormattedDivisions(dataUserApplication.divisions_crs),
                isSpecificRadio: true,
                specialType: 'personalMethod',
            },
            ...getAddressFields(),
            {
                title: 'Место предоставления справки',
                type: 'select',
                width: '100',
                fieldName: 'place_reference',
                value: null,
                editable: true,
                required: true,
                items: SocialPlaceOfReferenceOptions,
            },
            {
                title: 'Количество экземпляров справки',
                type: 'select',
                width: '100',
                fieldName: 'number_copies',
                value: null,
                editable: true,
                required: true,
                items: NumberOfCopiesOptions,
            },
            {
                title: 'Комментарий к заявке',
                type: 'textarea',
                fieldName: 'comment',
                value: '',
                editable: true,
            },
        ],
    }
}

export default getForm
