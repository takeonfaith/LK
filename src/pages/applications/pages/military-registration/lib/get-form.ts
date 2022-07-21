import { IInputArea } from '@ui/input-area/model'

const getForm = (): IInputArea => {
    return {
        title: 'Документы воинского учета',
        data: [
            {
                title: 'Телефон',
                type: 'tel',
                mask: true,
                fieldName: 'phone',
                value: '',
                editable: true,
                required: true,
            },
            {
                title: 'Email',
                type: 'email',
                fieldName: 'email',
                value: '',
                editable: true,
                required: true,
            },
        ],
        documents: { files: [], fieldName: 'docs', maxFiles: 4, required: false },
        alert: 'Допускаются файлы с расширениями jpg, png, pdf размером не более 10 Мб каждый',
        hint: 'Загрузите документы воинского учета для передачи в мобилизационный отдел (удостоверение гражданина, подлежащего призыву;военный билет). ',
    }
}

export default getForm
