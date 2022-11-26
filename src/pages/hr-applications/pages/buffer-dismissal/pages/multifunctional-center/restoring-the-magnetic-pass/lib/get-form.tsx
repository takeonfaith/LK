import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'
import React from 'react'

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    return {
        title: 'Запрос на восстановление магнитного пропуска',
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
                title: 'Прошу восстановить мой магнитный пропуск в связи с:',
                type: 'textarea',
                fieldName: 'reason',
                value: '',
                editable: true,
                required: true,
            },
        ],
        alert: (
            <>
                1. Заполнить это заявление.
                <br />
                2. Получить в своем отделении Центра по работе со студентами распечатанное заявление с визой руководителя.
                <br />
                3. Оплатить услугу по изготовлению нового пропуска в банке, получить квитанцию об оплате.
                <br />
                4. Предоставить заявление и квитанцию об оплате в бюро пропусков (Центральная проходная).
                <br />
                5. Получить готовый пропуск в бюро пропусков (Центральная проходная).
                <br />
                <br />
                Срок изготовления магнитного пропуска: 1-2 рабочих дня с момента предоставления оформленного заявления.
            </>
        ),
    }
}

export default getForm
