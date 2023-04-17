import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'
import { NumberOfCopiesOptions } from '@entities/applications/consts'
import getAddressFields from '@features/applications/lib/get-address-fields'
import getStudentSubdivisions from '@pages/applications/lib/get-student-subdivisions'
import getMethodObtainingFields from '@features/applications/lib/get-method-obtaining-fields'

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
            ...getMethodObtainingFields(),
            ...getStudentSubdivisions(dataUserApplication),
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
