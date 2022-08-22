import { IInputArea } from '@ui/input-area/model'

const justificationGrantOptions = [
    { id: 0, title: 'Сироты или оставшиеся без попечения родителей' },
    { id: 1, title: 'Инвалиды' },
    { id: 2, title: 'Члены многодетной семьи' },
    { id: 3, title: 'Имеющие на иждивении ребёнка' },
    { id: 4, title: 'Участники военных действий' },
    { id: 5, title: 'Родители – инвалиды, пенсионеры' },
    { id: 6, title: 'Члены неполной семьи' },
    { id: 7, title: 'Хроническое заболевание' },
]

const paymentMethodOptions = [
    { id: 0, title: 'Выплату прошу производить наличным путем' },
    { id: 1, title: 'Выплату производить безналичным путем на расчетный счет открытый в ПАО Сбербанк:' },
]

const getForm = (): IInputArea => {
    return {
        title: 'Оформить материальную поддержку остронуждающимся студентам (Дотацию)',
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
            {
                title: 'Основание для получения дотации',
                fieldName: 'justification_grant',
                value: '',
                type: 'select',
                width: '100%',
                editable: true,
                required: true,
                items: justificationGrantOptions,
            },
            {
                title: 'Прошу назначить меня на получение материальной поддержки остронуждающимся студентам в связи с тем, что:',
                fieldName: 'reason',
                value: '',
                editable: true,
                required: true,
                placeholder: 'Укажите причину',
            },
            {
                title: 'Номер членского профсоюзного билета',
                fieldName: 'union_card_number',
                value: '',
                editable: true,
                required: true,
            },
            {
                title: 'Адрес по месту регистрации:',
                fieldName: 'registration_address',
                value: '',
                editable: true,
                required: true,
                placeholder: '(индекс, область, город, улица, дом, корпус, квартира)',
            },
            {
                title: 'Гражданин иностранного государства',
                fieldName: 'is_foreigner',
                type: 'checkbox',
                value: '',
                editable: true,
            },
            {
                title: 'Способ выплаты',
                fieldName: 'payment_method',
                value: '',
                type: 'select',
                width: '100%',
                editable: true,
                required: true,
                items: paymentMethodOptions,
            },
            {
                title: 'Расчетный счет, 20 цифр',
                fieldName: 'payment_account',
                value: '',
                width: '100%',
                editable: true,
                placeholder: '',
            },
        ],
        documents: { files: [], fieldName: 'docs', maxFiles: 4, required: true },
        alert: 'Загрузите документы, подтверждающие право на получение дотации',
    }
}

export default getForm
