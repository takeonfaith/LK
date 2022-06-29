import { Button, LinkButton, SubmitButton } from '@ui/atoms'
import BlockWrapper from '@ui/block/styles'
import { Message } from '@ui/message'
import localizeDate from '@utils/localize-date'
import React from 'react'
import { FiCheck, FiDownload } from 'react-icons/fi'
import styled from 'styled-components'
import { useModal } from 'widgets'
import { useElectronicAgreement } from '../hooks/use-electronic-agreement'
import { MistakeModal } from './atoms'

const CenterSection = styled(BlockWrapper)<{ showInfoText: boolean }>`
    .info-text {
        transition: 0.2s;
        opacity: ${({ showInfoText }) => (showInfoText ? 1 : 0)};
        visibility: ${({ showInfoText }) => (showInfoText ? 'visible' : 'hidden')};
        height: ${({ showInfoText }) => (showInfoText ? '100%' : '0')};
    }

    p {
        a {
            color: var(--blue);
        }

        b {
            opacity: 0.8;
        }
    }

    @media (max-width: 1000px) {
        width: 95%;
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
    const { open } = useModal()
    const { handleSubmit, loading, done, completed, setCompleted } = useElectronicAgreement({
        isDone,
        submit,
        setData,
    })

    if (!data) return null

    return (
        <CenterSection
            showInfoText={!data.status && !done}
            maxWidth="500px"
            orientation="vertical"
            height="fit-content"
            gap="10px"
        >
            <LinkButton
                href={data.file}
                onClick={() => null}
                text="Скачать согласие"
                width="100%"
                icon={<FiDownload />}
            />
            <Message
                type={'success'}
                icon={<FiCheck />}
                title={'Успешно подписано'}
                visible={data.status || done}
                align="center"
            />
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
    )
}

export default ElectornicAgreement
