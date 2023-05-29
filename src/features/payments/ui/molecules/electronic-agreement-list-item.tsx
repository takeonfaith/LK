import { paymentApi } from '@api'
import { Agreement } from '@api/model'
import { Accordion } from '@ui/accordion'
import { LinkButton, SubmitButton } from '@ui/atoms'
import { Message } from '@ui/message'
import localizeDate from '@utils/localize-date'
import React from 'react'
import { FiCheck, FiDownload } from 'react-icons/fi'
import styled from 'styled-components'
import { useElectronicAgreement } from 'widgets/electonic-agreement'

interface Props {
    data: Agreement
}

export const ElectronicAgreementListItem = ({ data }: Props) => {
    const { id, signed_user: signedUser, name, can_sign: isActive, date } = data

    const { handleSubmit, loading, done, completed, setCompleted } = useElectronicAgreement({
        isDone: signedUser,
        submit: () => paymentApi.agreementSubmit(id),
    })

    const height = signedUser || done ? 200 : 100

    return (
        <Accordion height={height} title={name} confirmed={signedUser}>
            {`${name} - ${localizeDate(date)}`}
            <Wrapper>
                <ActionsBlock>
                    {done && (
                        <ActionsBlockDescription>
                            Дата подписания: {localizeDate(data.signed_user_date || new Date())},{' '}
                            {data.signed_user_time || `${new Date().getHours()}:${new Date().getMinutes()}`}
                        </ActionsBlockDescription>
                    )}
                    <StyledLinkButton
                        href={data.file}
                        onClick={() => null}
                        text="Скачать документ"
                        icon={<FiDownload />}
                    />
                    <Message
                        type={'success'}
                        title={'Успешно отправлено'}
                        icon={<FiCheck />}
                        align="center"
                        visible={done}
                    />
                </ActionsBlock>
                {!done && (
                    <div className="block">
                        <SubmitButton
                            text={!done ? 'Подписать' : 'Подписано'}
                            action={handleSubmit}
                            isLoading={loading}
                            completed={completed}
                            isDone={done}
                            setCompleted={setCompleted}
                            isActive={!done && isActive}
                            popUpFailureMessage={
                                !isActive
                                    ? 'Необходимо сначала подписать соглашение об электронном взаимодейтсвии'
                                    : 'Согласие уже подписано'
                            }
                            popUpSuccessMessage="Согласие успешно подписано"
                        />
                    </div>
                )}
            </Wrapper>
        </Accordion>
    )
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 10px;
`

const ActionsBlock = styled.div`
    width: 49%;
    min-width: 320px;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
`

const ActionsBlockDescription = styled.p`
    text-align: center;
`

const StyledLinkButton = styled(LinkButton)`
    width: 100%;
`
