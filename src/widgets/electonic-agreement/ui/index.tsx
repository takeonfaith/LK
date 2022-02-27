import { pepApi } from '@api'
import { popUpMessageModel } from '@entities/pop-up-message'
import { Button, LinkButton, SubmitButton } from '@ui/atoms'
import localizeDate from '@utils/localize-date'
import React, { useEffect, useState } from 'react'
import { FiDownload } from 'react-icons/fi'
import styled from 'styled-components'
import { useModal } from 'widgets'
import { useElectronicAgreement } from '../hooks/use-electronic-agreement'
import { MistakeModal, Signed } from './atoms'

const CenterSection = styled.div<{ showInfoText: boolean }>`
    box-shadow: 0 0 100px #0000003e;
    width: 100%;
    max-width: 500px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: var(--brSemi);
    background: var(--form);

    .info-text {
        transition: 0.2s;
        opacity: ${({ showInfoText }) => (showInfoText ? 1 : 0)};
        visibility: ${({ showInfoText }) => (showInfoText ? 'visible' : 'hidden')};
        height: ${({ showInfoText }) => (showInfoText ? '100%' : '0')};
    }

    p {
        margin: 10px 0;

        a {
            color: var(--blue);
        }

        b {
            opacity: 0.8;
        }
    }

    @media (max-width: 1000px) {
        .center-section {
            box-shadow: none;
        }
    }
`

interface Props {
    children: React.ReactChild
    submit: () => Promise<void> | void
    data: any
    setData?: React.Dispatch<any>
    isDone?: boolean
}

const ElectornicAgreement = ({ children, data, setData, submit, isDone = false }: Props) => {
    const { open, handleSubmit, loading, done, completed, setCompleted } = useElectronicAgreement({
        isDone,
        submit,
        setData,
    })

    return !!data ? (
        <CenterSection showInfoText={!data.status && !done}>
            <LinkButton
                href={data.file}
                onClick={() => null}
                text="Скачать согласие"
                width="100%"
                icon={<FiDownload />}
            />
            <Signed show={data.status || done} />
            <div className="info-text">{children}</div>
            {!data.status && !done && (
                <SubmitButton
                    text={!data.status && !done ? 'Подписать' : 'Подписано'}
                    action={handleSubmit}
                    isLoading={loading}
                    completed={completed}
                    isDone={done || data.status}
                    setCompleted={setCompleted}
                    isActive={!data.status && !done}
                    popUpFailureMessage="Согласие уже подписано"
                    popUpSuccessMessage="Согласие успешно подписано"
                />
            )}
            {(data.status || done) && (
                <p>
                    Дата подписания: {localizeDate(data.date || new Date())},{' '}
                    {data.time || `${new Date().getHours()}:${new Date().getMinutes()}`}
                    <br />
                    {data.fio}
                </p>
            )}
            {!data.status && !done && (
                <Button
                    onClick={() => open(<MistakeModal />)}
                    text="Заметили ошибку в личных данных?"
                    background="transparent"
                    textColor="#b1b1b1"
                />
            )}
        </CenterSection>
    ) : (
        <></>
    )
}

export default ElectornicAgreement
