import localizeDate from '@utils/localize-date'
import React from 'react'
import styled from 'styled-components'

const RestMoney = styled.span`
    color: var(--red);
    font-weight: bold;
`

interface Props {
    endDate?: string
    sum: number
    allPayments: number
    short?: boolean
}

const MoneyNeedToPay = ({ sum, allPayments, endDate, short = false }: Props) => {
    if (short) {
        return (
            <p>
                К выплате до конца действия договора
                <RestMoney> {(sum - allPayments).toFixed(2)} руб.</RestMoney>
            </p>
        )
    }

    return (
        <p>
            К выплате до конца действия договора (до {localizeDate(endDate)} г.):
            <RestMoney> {(sum - allPayments).toFixed(2)} руб.</RestMoney> (без учета индексации)
        </p>
    )
}

export default MoneyNeedToPay
