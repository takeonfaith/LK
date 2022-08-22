import { IInputArea } from '@ui/input-area/model'

const reasons = [
    {
        id: 0,
        title: 'Являющиеся детьми-сиротами и детьми, оставшимися без попечения родителей, лицами из числа детей-сирот и детей, оставшихся без попечения родителей, лицами, потерявшими в период обучения обоих родителей или единственного родителя, детьми-инвалидами',
    },
    { id: 1, title: 'Аттестат с отличием' },
    { id: 2, title: 'Диплом' },
    { id: 3, title: 'Диплом дубликат' },
    { id: 4, title: 'Диплом с отличием' },
    { id: 5, title: 'Свидетельство' },
    { id: 6, title: 'Удостоверение' },
    { id: 7, title: 'Сертификат' },
]

const getForm = (): IInputArea => {
    return {
        title: 'Оформление социальной стипендии',
        data: [
            {
                title: 'Телефон',
                type: 'tel',
                mask: true,
                fieldName: 'phone',
                editable: true,
                value: '',
            },

            {
                title: 'Email',
                type: 'email',
                fieldName: 'email',
                value: '',
                editable: true,
                required: true,
            },
            {
                title: 'Основание для получения социальнй стипендии:',
                type: 'select',
                fieldName: 'reason',
                value: null,
                width: '100%',
                items: reasons,
                editable: true,
                required: true,
            },
        ],
        hint: 'Копии свидетельств о смерти родителей или копия решения суда о лишении их родительских прав или справка (копия) из органов опеки о признании студента сиротой или оставшимся без попечения родителей; копия паспорта студента гражданина РФ страницы 2, 3, 4, 5; для проживающих в общежитии – копия регистрации',
        documents: { files: [], fieldName: 'docs', required: true, maxFiles: 4 },
    }
}

export default getForm
