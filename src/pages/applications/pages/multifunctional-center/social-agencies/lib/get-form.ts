import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'
import { NumberOfCopiesOptions } from '@entities/applications/consts'
import getAddressFields from '@features/applications/lib/get-address-fields'
import getStudentSubdivisions from '@pages/applications/lib/get-student-subdivisions'
import getMethodObtainingFields from '@features/applications/lib/get-method-obtaining-fields'

const SocialPlaceOfReferenceOptions = [
    { id: 0, title: 'в Фонд пенсионного и социального страхования Российской Федерации (СФР)' },
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
            ...getMethodObtainingFields(),
            ...getStudentSubdivisions(dataUserApplication),
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
