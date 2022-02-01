import { pepApi } from '@api'
import { popUpMessageModel } from '@entities/pop-up-message'
import { Button, LinkButton, SubmitButton } from '@ui/atoms'
import localizeDate from '@utils/localize-date'
import React, { useEffect, useState } from 'react'
import { FiDownload } from 'react-icons/fi'
import styled from 'styled-components'
import { useModal } from 'widgets'
import { MistakeModal, Signed } from './ui'

const ElectronicInteractionAgreementPageWrapper = styled.div<{ showInfoText: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    color: var(--text);

    .center-section {
        box-shadow: 0 0 100px #0000003e;
        width: 100%;
        max-width: 500px;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-radius: var(--brSemi);

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
    }

    @media (max-width: 1000px) {
        .center-section {
            box-shadow: none;
        }
    }
`

const ElectronicInteractionAgreementPage = () => {
    const { open } = useModal()
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState(false)
    const [completed, setCompleted] = useState(false)
    const [done, setDone] = useState(false)

    const handleSubmit = async () => {
        try {
            setLoading(true)
            await pepApi.set()
            setLoading(false)
            setCompleted(true)
            setDone(true)
        } catch (error) {
            setLoading(false)
            popUpMessageModel.events.evokePopUpMessage({ message: 'Не удалось подписать', type: 'failure' })
        }
    }

    useEffect(() => {
        pepApi.get().then((res) => setData(res.data[0]))
    }, [])

    return !!data ? (
        <ElectronicInteractionAgreementPageWrapper showInfoText={!data.status && !done}>
            <div className="center-section">
                <LinkButton
                    href={data.file}
                    onClick={() => null}
                    text="Скачать согласие"
                    width="100%"
                    icon={<FiDownload />}
                />
                <Signed show={data.status || done} />
                <p className="info-text">
                    Я, <b>{data.fio}</b>,
                    <p>
                        <b>Паспорт: </b>
                        {data.passSer} {data.passNum}, выдан {localizeDate(data.passDate)} {data.passDiv}
                        <br />
                        <b>Дата рождения: </b>
                        {localizeDate(data.bdate)}
                        <br />
                        <b>Номер мобильного телефона: </b>
                        {data.phone}
                        <br />
                        <b>Адрес электронной почты: </b>
                        {data.email}
                    </p>
                    <p>
                        настоящим безоговорочно без каких-либо изъятий или ограничений на условиях присоединения
                        принимаю условия{' '}
                        <a
                            target="_blank"
                            href="https://e.mospolytech.ru/old/storage/files/EAccept.pdf"
                            rel="noreferrer"
                        >
                            СОГЛАШЕНИЯ
                        </a>{' '}
                        об электронном взаимодействии, опубликованного на официальном сайте Университета, и выражаю
                        согласие на подписание электронных документов в личном кабинете.
                    </p>
                </p>

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
            </div>
        </ElectronicInteractionAgreementPageWrapper>
    ) : (
        <></>
    )
}

export default ElectronicInteractionAgreementPage
