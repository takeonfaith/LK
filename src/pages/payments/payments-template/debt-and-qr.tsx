import PaymentButton from '@features/payment-button'
import { Contract } from '@features/payments'
import { PaymentsContract } from '@shared/api/model'
import { Colors } from '@shared/consts'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import localizeDate from '@shared/lib/localize-date'
import { AnimatedCheck } from '@shared/ui/animated-check'
import { Button, LinkButton } from '@shared/ui/atoms'
import Flex from '@shared/ui/flex'
import Notification from '@shared/ui/notification'
import Subtext from '@shared/ui/subtext'
import { Title } from '@shared/ui/title'
import React, { useState } from 'react'
import { BiRuble, BiWallet } from 'react-icons/bi'
import {} from 'react-icons/hi'
import styled from 'styled-components'
import { useModal } from 'widgets'
import Slider from 'widgets/slider'

const DebtAndQrWrapper = styled.div`
    width: 100%;
`

const DebtAndQrStyled = styled.div`
    width: 100%;
    padding: 16px;
    background: var(--form);
    border-radius: 6px;
    box-shadow: var(--schedule-shadow);
`

const DebtAndQrContentStyled = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 20px;
    width: 100%;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
`

const ButtonsList = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    height: 35px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 0;
        align-items: flex-start;
        height: fit-content;
    }
`

const Debt = styled.div<{ color: string }>`
    color: ${({ color }) => color};
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    align-items: center;
`

const ContractButtonWrapper = styled.div`
    position: relative;
`

type Props = {
    data: PaymentsContract
    isDormitory: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DebtAndQr = (props: Props) => {
    const { data, isDormitory } = props
    const { balance_currdate, balance, endDatePlan, can_sign, bill, qr_current, qr_total } = data
    const { isMobile } = useCurrentDevice()
    const { open } = useModal()
    const [currentPage, setCurrentPage] = useState(0)
    const chosenDebt = currentPage === 0 ? +balance_currdate : +balance
    const hasDebt = chosenDebt > 0
    const debtColor = chosenDebt > 0 ? Colors.red.main : Colors.green.main
    const paymentPlace = isDormitory ? 'общежитию' : 'обучению'
    const text = hasDebt
        ? `Долг по ${paymentPlace}`
        : chosenDebt < 0
        ? `Переплата по ${paymentPlace}`
        : 'У вас нет долга'
    const dateText = currentPage === 0 ? `На ${localizeDate(new Date())}` : `До ${localizeDate(endDatePlan)}`

    // const handleQrTutorial = () => {
    //     open(<></>, 'Как оплатить с помощью QR')
    // }

    const handleOpenContract = () => {
        open(<Contract contract={data} />, 'Реквизиты договора')
    }

    return (
        <DebtAndQrWrapper>
            <Title icon={<BiWallet />} size={4} align="left" bottomGap>
                Задолженность
            </Title>
            <DebtAndQrStyled>
                <Slider
                    pages={[{ title: 'Текущая' }, { title: 'Общая' }]}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    appearance={false}
                />
                <DebtAndQrContentStyled>
                    <Flex d="column" gap="12px" ai="flex-start">
                        <Debt color={debtColor}>
                            {chosenDebt >= 0 ? chosenDebt : `+${-chosenDebt}`}
                            <BiRuble />
                        </Debt>
                        <Flex d="column" gap="4px" ai="flex-start">
                            <Title size={3} align="left">
                                {text}
                            </Title>
                            <Subtext>{dateText}</Subtext>
                        </Flex>
                    </Flex>
                    {hasDebt ? (
                        <PaymentButton
                            currentPage={currentPage}
                            type={isMobile ? 'horizontal' : 'vertical'}
                            qr_current={qr_current}
                            qr_total={qr_total}
                        />
                    ) : (
                        <AnimatedCheck color="green" size="40px" />
                    )}
                </DebtAndQrContentStyled>
                <ButtonsList>
                    {bill && (
                        <LinkButton
                            text="Квитанция на оплату"
                            background="transparent"
                            textColor={Colors.grey.main}
                            align="left"
                            width="fit-content"
                            href={bill}
                            padding="0"
                        />
                    )}
                    <ContractButtonWrapper>
                        <Button
                            onClick={handleOpenContract}
                            text="Реквизиты договора"
                            background="transparent"
                            textColor={Colors.grey.main}
                            width="fit-content"
                            padding="0"
                            align="left"
                        />
                        <Notification right="-25px" top="10px" visible={can_sign} pulsing>
                            1
                        </Notification>
                    </ContractButtonWrapper>
                    {/* {!isMobile && <Divider direction="vertical" />} */}
                    {/* <Button
                        onClick={handleQrTutorial}
                        text="Как оплатить с помощью QR?"
                        background="transparent"
                        textColor={Colors.grey.main}
                        width="fit-content"
                        padding="0"
                        align="left"
                    /> */}
                </ButtonsList>
            </DebtAndQrStyled>
        </DebtAndQrWrapper>
    )
}

export default DebtAndQr
