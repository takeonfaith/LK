import QrCode from '@features/payments/ui/atoms/qr-code'
import { Colors } from '@shared/consts'
import { Button } from '@shared/ui/button'
import React from 'react'
import { SliderPage, useModal } from 'widgets'

type Props = {
    qr_current: string
    qr_total: string
}

const PaymentButton = ({ qr_current, qr_total }: Props) => {
    const { open } = useModal()
    const title = 'Оплатить через QR-code'

    const handleClickPay = () => {
        open(
            <SliderPage
                pages={[
                    { title: 'Текущая залолженность', content: <QrCode qrCode={qr_current} /> },
                    { title: 'Общая залолженность', content: <QrCode qrCode={qr_total} /> },
                ]}
            />,
            title,
        )
    }
    return <Button text={title} onClick={handleClickPay} width="100%" textColor="#fff" background={Colors.green.main} />
}

export default PaymentButton
