import { electronicInteractionModel } from '@entities/electronic-interaction'
import PageBlock from '@shared/ui/page-block'
import { Wrapper } from '@ui/atoms'
import localizeDate from '@utils/localize-date'
import React from 'react'
import { ElectornicAgreement } from 'widgets/electonic-agreement'

const ElectronicInteractionAgreementPage = () => {
    const { data, error } = electronicInteractionModel.selectors.useElectronicInteraction()
    const handleSubmit = async () => {
        electronicInteractionModel.effects.postElectronicInteractionFx()
    }

    return (
        <Wrapper
            load={() => electronicInteractionModel.effects.getElectronicInteractionFx()}
            loading={!data}
            error={error}
            data={data}
        >
            <PageBlock>
                {data && (
                    <ElectornicAgreement data={data} submit={handleSubmit}>
                        <p className="info-text">
                            Я, <b>{data.fio}</b>,
                            <p>
                                <b>Паспорт: </b>
                                {data.passSer} {data.passNum}, выдан {localizeDate(data.passDate)} {data.passDiv}
                                <br />
                                <b>Дата рождения: </b>
                                {data.bdate}
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
                                об электронном взаимодействии, опубликованного на официальном сайте Университета, и
                                выражаю согласие на подписание электронных документов в личном кабинете.
                            </p>
                        </p>
                    </ElectornicAgreement>
                )}
            </PageBlock>
        </Wrapper>
    )
}

export default ElectronicInteractionAgreementPage
