import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'
import { getFormattedDivisions } from '@features/applications/lib/get-divisions'

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    return {
        title: 'Произвольный запрос',
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
                title: 'Выберите структурное подразделение для обращения',
                type: 'radio',
                fieldName: 'structural-subdivision',
                value: null,
                editable: true,
                items: getFormattedDivisions(dataUserApplication.divisions_all),
                isSpecificRadio: true,
            },
            {
                title: 'Тематика обращения',
                type: 'text',
                fieldName: 'subject_appeal',
                value: '',
                editable: true,
                required: true,
            },
            {
                title: 'Суть обращения',
                type: 'textarea',
                fieldName: 'essence ',
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
        documents: { files: [], fieldName: 'docs', maxFiles: 4, required: false },
        alert: 'Данный запрос позволит отправить Ваш запрос в любое доступное структурное подразделение. Используйте эту функцию только при крайней необходимости.',
        hint: 'При необходимости получения скана готового документа по электронной почте или оригинала по обычной почте укажите это в поле комментария. Для получения оргигинала укажите также ваш почтовый адрес, включая индекс.',
    }
}

export default getForm
