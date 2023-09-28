import { electronicInteractionModel } from '@entities/electronic-interaction'
import PageBlock from '@shared/ui/page-block'
import { Wrapper } from '@ui/atoms'
import localizeDate from '@shared/lib/dates/localize-date'
import { useUnit } from 'effector-react'
import React from 'react'
import { ElectornicAgreement } from 'widgets/electonic-agreement'

const ElectronicInteractionAgreementPage = () => {
    const [data, error, loading] = useUnit([
        electronicInteractionModel.stores.$electronicInteractionStore,
        electronicInteractionModel.stores.$error,
        electronicInteractionModel.stores.$loading,
    ])
    const preparedData = data

    const load = () => electronicInteractionModel.effects.getElectronicInteractionFx()

    return (
        <Wrapper load={load} loading={loading} error={error} data={preparedData} loadEveryVisit>
            <PageBlock>
                {preparedData && (
                    <ElectornicAgreement>
                        <div className="info-text">
                            Я, <b>{preparedData.fio}</b>,
                            <p>
                                <b>Паспорт: </b>
                                {preparedData.passSer} {preparedData.passNum}, выдан{' '}
                                {localizeDate(preparedData.passDate)} {preparedData.passDiv}
                                <br />
                                <b>Дата рождения: </b>
                                {preparedData.bdate}
                                <br />
                                <b>Номер мобильного телефона: </b>
                                {preparedData.phone}
                                <br />
                                <b>Адрес электронной почты: </b>
                                {preparedData.email}
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
                                об электронном взаимодействии, опубликованного на официальном сайте Университета, и
                                выражаю согласие на подписание электронных документов в личном кабинете.
                            </p>
                        </div>
                    </ElectornicAgreement>
                )}
            </PageBlock>
        </Wrapper>
    )
}

export default ElectronicInteractionAgreementPage
