import { Colors } from '@shared/consts'
import { Button } from '@shared/ui/button'
import React from 'react'
import { useModal } from 'widgets'
import PayQRModal from './pay-qr-modal'

type Props = {
    qr_current: string
    qr_total: string
}

const PaymentButton = ({ qr_current, qr_total }: Props) => {
    const { open } = useModal()
    const title = 'Оплатить через QR-code'

    const handleClickPay = () => {
        open(<PayQRModal qr_current={qr_current} qr_total={qr_total} />, title)
    }
    return <Button text={title} onClick={handleClickPay} width="100%" textColor="#fff" background={Colors.green.main} />
}

export default PaymentButton
