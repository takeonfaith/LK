import { pepApi } from '@api'
import { popUpMessageModel } from '@entities/pop-up-message'
import { LinkButton, SubmitButton } from '@ui/atoms'
import useResize from '@utils/hooks/use-resize'
import localizeDate from '@utils/localize-date'
import React, { useEffect, useState } from 'react'
import { FiDownload } from 'react-icons/fi'
import styled from 'styled-components'

const ElectronicInteractionAgreementPageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;

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

        p {
            margin: 10px 0;

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

// interface Data {

// }

const ElectronicInteractionAgreementPage = () => {
    const { height, width } = useResize()
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

    console.log(data)

    return !!data ? (
        <ElectronicInteractionAgreementPageWrapper>
            {/* <embed
                src="https://vk.com/doc3885147_630383620?hash=fd95a34e74ede7d4de&dl=dabc5842b8d20c1936"
                width={width - 200}
                height={height - 200}
            /> */}
            <div className="center-section">
                <LinkButton
                    href={data.file}
                    onClick={() => null}
                    text="Скачать согласие"
                    width="100%"
                    icon={<FiDownload />}
                />
                <p>
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
                {(data.status || done) && <p>Дата подписания: {localizeDate(data.date ?? new Date())}</p>}
            </div>
        </ElectronicInteractionAgreementPageWrapper>
    ) : (
        <></>
    )
}

export default ElectronicInteractionAgreementPage
