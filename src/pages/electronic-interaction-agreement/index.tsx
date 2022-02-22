import { pepApi } from '@api'
import { popUpMessageModel } from '@entities/pop-up-message'
import { Button, LinkButton, SubmitButton } from '@ui/atoms'
import localizeDate from '@utils/localize-date'
import React, { useEffect, useState } from 'react'
import { FiDownload } from 'react-icons/fi'
import styled from 'styled-components'
import { useModal } from 'widgets'
import { ElectornicAgreement } from 'widgets/electonic-agreement'
import { MistakeModal, Signed } from './ui'

const ElectronicInteractionAgreementPageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    color: var(--text);
`

const ElectronicInteractionAgreementPage = () => {
    const [data, setData] = useState<any>(null)

    const handleSubmit = async () => {
        pepApi.set()
    }

    useEffect(() => {
        pepApi.get().then((res) => setData(res.data[0]))
    }, [])

    return !!data ? (
        <ElectronicInteractionAgreementPageWrapper>
            <ElectornicAgreement data={data} setData={setData} submit={handleSubmit}>
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
            </ElectornicAgreement>
        </ElectronicInteractionAgreementPageWrapper>
    ) : (
        <></>
    )
}

export default ElectronicInteractionAgreementPage
