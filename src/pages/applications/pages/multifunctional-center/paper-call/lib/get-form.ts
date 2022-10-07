import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'
import { MethodObtainingOptions, NumberOfCopiesOptions } from '@entities/applications/consts'
import { getDivisionsCrs } from '@features/applications/lib/get-divisions'
import getAddressFields from '@features/applications/lib/get-address-fields'

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    return {
        title: 'Справка-вызов',
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
                items: getDivisionsCrs(dataUserApplication.divisions_crs),
                isSpecificRadio: true,
                specialType: 'personalMethod',
            },
            ...getAddressFields(),
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
                title: 'Место предоставления справки',
                fieldName: 'place_reference',
                value: null,
                editable: true,
                required: true,
            },
            {
                title: 'Период времени - с:',
                type: 'date',
                fieldName: 'time-before',
                value: '',
                editable: true,
                required: true,
            },
            {
                title: 'по:',
                type: 'date',
                fieldName: 'time-after',
                value: '',
                editable: true,
                required: true,
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
