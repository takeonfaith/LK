import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    return {
        title: 'Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призыва на военную службу',
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
        ],
        alert:
            '1. Заполнить это заявление.' +
            '2. Получить в своем отделении Центра по работе со студентами распечатанное заявление с визой руководителя.\n' +
            '3. Оплатить услугу по изготовлению нового пропуска в банке, получить квитанцию об оплате.\n' +
            '4. Предоставить заявление и квитанцию об оплате в бюро пропусков (Центральная проходная).\n' +
            '5. Получить готовый пропуск в бюро пропусков (Центральная проходная).\n' +
            'Срок изготовления магнитного пропуска: 1-2 рабочих дня с момента предоставления оформленного заявления.',
    }
}

export default getForm
