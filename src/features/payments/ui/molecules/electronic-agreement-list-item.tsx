import { Agreement } from '@api/model'
import { paymentsModel } from '@entities/payments'
import Flex from '@shared/ui/flex'
import Subtext from '@shared/ui/subtext'
import Accordion from '@ui/accordion/accordion'
import { LinkButton, SubmitButton, Title } from '@ui/atoms'
import { Message } from '@ui/message'
import localizeDate from '@shared/lib/dates/localize-date'
import { useUnit } from 'effector-react'
import React from 'react'
import { FiCheck, FiDownload } from 'react-icons/fi'
import styled from 'styled-components'

interface Props {
    data: Agreement
    isContractSigned: boolean
}

const SignBlock = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
    }
`

const ElectronicAgreementListItem = ({ data, isContractSigned }: Props) => {
    const { id, signed_user: signedUser, name, can_sign: isActive, date } = data
    const [done, completed, loading] = useUnit([
        paymentsModel.stores.$done,
        paymentsModel.stores.$completed,
        paymentsModel.stores.$loading,
    ])

    const height = signedUser || done ? 140 : 100
    const handleSubmit = () => paymentsModel.events.signAgreement(id)
    const setCompleted = paymentsModel.events.setCompleted

    return (
        <Accordion height={height} title={name} confirmed={signedUser || done}>
            <SignBlock>
                <Flex d="column" ai="flex-start" gap="4px">
                    <Title size={5} align="left">
                        {name}
                    </Title>
                    <Subtext>{localizeDate(date)}</Subtext>
                </Flex>
                <Flex gap="8px" w="100%" jc="flex-end">
                    <LinkButton
                        href={data.file}
                        onClick={() => null}
                        width="40px"
                        icon={<FiDownload />}
                        isActive={!!data.file}
                        // background="transparent"
                    />
                    {!(signedUser || done) && (
                        <SubmitButton
                            text={!(signedUser || done) ? 'Подписать' : 'Подписано'}
                            action={handleSubmit}
                            isLoading={loading}
                            completed={completed}
                            isDone={signedUser || done}
                            width="160px"
                            setCompleted={setCompleted}
                            isActive={!(signedUser || done) && isActive}
                            popUpFailureMessage={
                                !isActive
                                    ? isContractSigned
                                        ? 'Необходимо сначала подписать соглашение об электронном взаимодейтсвии'
                                        : 'Необходимо сначала подписать договор'
                                    : 'Согласие уже подписано'
                            }
                            popUpSuccessMessage="Согласие успешно подписано"
                        />
                    )}
                    <Message
                        type={'success'}
                        title={'Подписано'}
                        icon={<FiCheck />}
                        align="center"
                        width="130px"
                        visible={signedUser || done}
                    />
                </Flex>
            </SignBlock>
            {(done || signedUser) && (
                <Subtext>
                    Дата подписания: {localizeDate(data.signed_user_date || new Date())},{' '}
                    {data.signed_user_time || `${new Date().getHours()}:${new Date().getMinutes()}`}
                </Subtext>
            )}
        </Accordion>
    )
}

export default ElectronicAgreementListItem
