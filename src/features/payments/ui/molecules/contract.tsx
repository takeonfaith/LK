import { PaymentsContract } from '@api/model'
import { paymentsModel } from '@entities/payments'
import { Colors } from '@shared/constants'
import KeyValue from '@shared/ui/atoms/key-value'
import Flex from '@shared/ui/flex'
import { Button, LinkButton, SubmitButton } from '@ui/atoms'
import localizeDate from '@shared/lib/dates/localize-date'
import React, { useState } from 'react'
import { FiDownload } from 'react-icons/fi'
import styled from 'styled-components'
import { useModal } from 'widgets'
import TechicalErrorMessage from './technical-error-message'
import { formatNumber } from '@shared/lib/get-number-with-spaces-format'
import { useUnit } from 'effector-react'

const ContractWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    height: 300px;
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
    if (!contract) return null
    const { number, startDate, endDatePlan, contragent, sum, can_sign, file, student } = contract
    const { open } = useModal()
    const [copied, setCopied] = useState<boolean>(false)
    const [loading, setLoading] = useState(false)
    const [completed, setCompleted] = useState(false)
    const error = useUnit(paymentsModel.stores.$error)

    const contractInfo = [
        {
            text: 'Номер договора',
            info: number ?? '',
        },
        {
            text: 'Начало действия',
            info: localizeDate(startDate),
        },
        {
            text: 'Действует до',
            info: localizeDate(endDatePlan),
        },
        {
            text: 'Заказчик',
            info: contragent || 'Московский политех',
        },
        {
            text: 'Обучающийся',
            info: student ?? '',
        },
        {
            text: 'Сумма к оплате',
            info: formatNumber(sum) ?? '',
        },
        {
            text: 'Статус',
            info: '',
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

    const handleOpenCantSign = () => {
        open(<TechicalErrorMessage />, 'Не получается подписать')
    }

    return (
        <ContractWrapper>
            <div className="contract-info">
                {contractInfo.map(({ info, text }) => {
                    return <KeyValue keyStr={text} value={info} key={info} />
                })}
            </div>
            {can_sign && (
                <Flex d="column" gap="8px">
                    <SubmitButton
                        text="Подписать договор"
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
                    <Button
                        onClick={handleOpenCantSign}
                        text="Не получается подписать?"
                        background="transparent"
                        textColor={Colors.grey.main}
                    />
                </Flex>
            )}

            {!can_sign && (
                <Flex gap="8px">
                    <SubmitButton
                        text="Скопировать номер договора"
                        action={handleCopy}
                        isLoading={false}
                        completed={copied}
                        setCompleted={setCopied}
                        popUpSuccessMessage="Номер договора скопирован в буфер"
                        isActive
                    />
                    <LinkButton onClick={() => null} href={file ?? ''} icon={<FiDownload />} width="45px" />
                </Flex>
            )}
        </ContractWrapper>
    )
}

export default Contract
