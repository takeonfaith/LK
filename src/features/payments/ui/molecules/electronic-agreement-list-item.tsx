import { paymentApi } from '@api'
import { Agreement } from '@api/model'
import Flex from '@shared/ui/flex'
import Subtext from '@shared/ui/subtext'
import Accordion from '@ui/accordion/accordion'
import { Divider, LinkButton, SubmitButton, Title } from '@ui/atoms'
import { Message } from '@ui/message'
import localizeDate from '@utils/localize-date'
import React from 'react'
import { FiCheck, FiDownload } from 'react-icons/fi'
import styled from 'styled-components'
import { useElectronicAgreement } from 'widgets/electonic-agreement'

interface Props {
    data: Agreement
}

const SignBlock = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
    }
`

const ElectronicAgreementListItem = ({ data }: Props) => {
    const { id, signed_user: signedUser, name, can_sign: isActive, date } = data

    const { handleSubmit, loading, done, completed, setCompleted } = useElectronicAgreement({
        isDone: signedUser,
        submit: () => paymentApi.agreementSubmit(id),
    })

    const height = signedUser || done ? 140 : 100

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
                        isActive={data.file !== ''}
                        // background="transparent"
                    />
                    {!done && (
                        <SubmitButton
                            text={!done ? 'Подписать' : 'Подписано'}
                            action={handleSubmit}
                            isLoading={loading}
                            completed={completed}
                            isDone={done}
                            width="160px"
                            setCompleted={setCompleted}
                            isActive={!done && isActive}
                            popUpFailureMessage={
                                !isActive
                                    ? 'Необходимо сначала подписать соглашение об электронном взаимодейтсвии'
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
                        visible={done}
                    />
                </Flex>
            </SignBlock>
            {(done || signedUser) && <Divider width="100%" />}
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
