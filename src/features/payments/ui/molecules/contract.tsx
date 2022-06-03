import { PaymentsContract } from '@api/model'
import { SubmitButton } from '@ui/atoms'
import React, { useState } from 'react'
import styled from 'styled-components'
import localizeDate from '@utils/localize-date'
import { paymentsModel } from '@entities/payments'

const ContractWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    justify-content: space-between;

    .contract-info {
        display: flex;
        flex-direction: column;
    }

    p {
        margin: 4px 0;
    }
`

interface Props {
    contract?: PaymentsContract
}

const Contract = ({ contract }: Props) => {
    const [copied, setCopied] = useState<boolean>(false)
    const [loading, setLoading] = useState(false)
    const [completed, setCompleted] = useState(false)
    const { error } = paymentsModel.selectors.usePayments()

    const contractInfo = [
        {
            text: 'Номер договора: ',
            info: contract?.number ?? '',
        },
        {
            text: 'Начало действия: ',
            info: localizeDate(contract?.startDate),
        },
        {
            text: 'Действует до: ',
            info: localizeDate(contract?.endDatePlan),
        },
        {
            text: 'Заказчик: ',
            info: contract?.contragent || 'Московский политех',
        },
        {
            text: 'Обучающийся: ',
            info: contract?.student ?? '',
        },
        {
            text: 'Сумма к оплате: ',
            info: contract?.sum ?? '',
        },
        // {
        //     text: 'Ежемесячная плата: ',
        //     info: contract?. ?? '',
        // },
    ]

    const handleCopy = () => {
        navigator.clipboard.writeText(contract?.number ?? '')
        setCopied(true)
    }

    const handleSign = () => {
        if (contract) {
            setLoading(true)
            paymentsModel.effects.signContractFx(contract.id)
            setLoading(false)
            setCompleted(true)
        }
    }

    return (
        <ContractWrapper>
            <div className="contract-info">
                {contractInfo.map((info, i) => {
                    return (
                        <p key={i}>
                            <b>{info.text}</b>
                            <span> {info.info}</span>
                        </p>
                    )
                })}
            </div>
            {contract?.can_sign && (
                <SubmitButton
                    text="Подписать"
                    buttonSuccessText="Подписан"
                    action={handleSign}
                    isLoading={loading}
                    completed={completed}
                    repeatable={false}
                    popUpFailureMessage={error ?? 'Не удалось подписать договор'}
                    setCompleted={setCompleted}
                    popUpSuccessMessage="Договор подписан"
                    isActive
                    pulsing
                />
            )}

            {!contract?.can_sign && (
                <SubmitButton
                    text="Скопировать номер договора"
                    action={handleCopy}
                    isLoading={false}
                    completed={copied}
                    setCompleted={setCopied}
                    popUpSuccessMessage="Номер договора скопирован в буфер"
                    isActive
                />
            )}
        </ContractWrapper>
    )
}

export default Contract
