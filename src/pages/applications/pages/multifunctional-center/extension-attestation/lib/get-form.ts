import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'

const TypesApplicationByDeadlineOptions = [
    { id: 0, title: 'изменение сроков' },
    { id: 1, title: 'продление сроков' },
]
const TypesAttestationOptions = [
    { id: 0, title: 'промежуточная аттестация' },
    { id: 1, title: 'государственная итоговая аттестация (итоговая аттестация)' },
]

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    return {
        title: 'Продление промежуточной аттестации или ГИА',
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
                title: 'Тип заявления',
                type: 'select',
                fieldName: 'srok',
                width: '100',
                value: null,
                required: true,
                editable: true,
                items: TypesApplicationByDeadlineOptions,
            },
            {
                title: 'Вид аттестации',
                type: 'select',
                fieldName: 'type-attestation',
                width: '100',
                value: null,
                required: true,
                editable: true,
                items: TypesAttestationOptions,
            },
            {
                title: 'Причина продления, в связи с',
                type: 'textarea',
                fieldName: 'reason',
                value: '',
                editable: true,
                required: true,
            },
            {
                title: 'Количество листов подтверждающих документов',
                type: 'text',
                fieldName: 'num_sheets',
                value: null,
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
        documents: { files: [], fieldName: 'docs', maxFiles: 6, required: false },
    }
}

export default getForm
