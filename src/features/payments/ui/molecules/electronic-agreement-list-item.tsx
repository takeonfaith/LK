import { paymentApi } from '@api'
import { Agreement } from '@api/model'
import Accordion from '@ui/accordion/accordion'
import { LinkButton, SubmitButton } from '@ui/atoms'
import localizeDate from '@utils/localize-date'
import React from 'react'
import { FiDownload } from 'react-icons/fi'
import styled from 'styled-components'
import { ElectornicAgreement, useElectronicAgreement } from 'widgets/electonic-agreement'
import { Signed } from 'widgets/electonic-agreement/ui/atoms'

interface Props {
    data: Agreement
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    .block {
        width: 49%;
        min-width: 320px;
        display: flex;
        flex-direction: column;
        gap: 0.625rem;

        .text {
            text-align: center;
        }
    }
`

const ElectronicAgreementListItem = ({ data }: Props) => {
    const { id, signed_user: signedUser, name, can_sign: isActive } = data

    const { handleSubmit, loading, done, completed, setCompleted } = useElectronicAgreement({
        isDone: signedUser,
        submit: () => paymentApi.agreementSubmit(id),
    })

    const height = signedUser || done ? 180 : 80

    // TODO: Этап рефакторинга №2
    return (
        <Accordion height={height} title={name} confirmed={signedUser}>
            <Wrapper>
                <div className="block">
                    {done && (
                        <p className="text">
                            Дата подписания: {localizeDate(data.signed_user_date || new Date())},{' '}
                            {data.signed_user_time || `${new Date().getHours()}:${new Date().getMinutes()}`}
                        </p>
                    )}
                    <LinkButton
                        href={data.file}
                        onClick={() => null}
                        text="Скачать согласие"
                        width="100%"
                        icon={<FiDownload />}
                    />
                    {done && <Signed show={done} disabledMargin />}
                </div>
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
                            popUpFailureMessage="Согласие уже подписано"
                            popUpSuccessMessage="Согласие успешно подписано"
                        />
                    </div>
                )}
            </Wrapper>
        </Accordion>
    )
}

export default ElectronicAgreementListItem
