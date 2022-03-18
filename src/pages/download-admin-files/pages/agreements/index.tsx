import { Colors } from '@consts'
import { teacherDateVerificationModel } from '@entities/teacher-data-verification'
import { Divider, LinkButton, Message, Title } from '@ui/atoms'
import { DateInterval } from '@ui/molecules'
import localizeDate from '@utils/localize-date'
import React, { useState } from 'react'
import { FiDownload, FiInfo } from 'react-icons/fi'
import styled from 'styled-components'

const DownloadAgreementsWrapper = styled.div`
    .content {
        display: flex;
        flex-direction: column;
        gap: 20px;

        section {
            display: flex;
            gap: 10px;
        }
    }
`

const getMessage = (dates: string[]) => {
    if (!dates[0].length && !!dates[1].length) return `За весь период до ${localizeDate(dates[1])} включительно`

    if (!!dates[0].length && !dates[1].length) return `За весь период начиная с ${localizeDate(dates[0])} включительно`

    if (!dates[0].length && !dates[1].length) return 'За все время'

    if (!!dates[0].length && !!dates[1].length)
        return `За период с ${localizeDate(dates[0])} по ${localizeDate(dates[1])}`
}

const DownloadAgreements = () => {
    const [dates, setDates] = useState(['', ''])
    const [validDates, setValidDates] = useState(false)
    const { data } = teacherDateVerificationModel.selectors.useTeacherDataVerification()
    return !!data ? (
        <DownloadAgreementsWrapper>
            <Title size={3} align="left" bottomGap>
                Скачать соглашения
            </Title>
            <div className="content">
                <DateInterval dates={dates} setDates={setDates} valid={validDates} setValid={setValidDates} />
                <Message type="info" title={getMessage(dates) ?? ''} icon={<FiInfo />} />

                {data.links.map((link, i) => {
                    const href = link.url + '&date_from=' + dates[0] + '&date_to=' + dates[1]
                    return (
                        <React.Fragment key={link.title}>
                            <section>
                                <Title size={4} align="left">
                                    {link.title}
                                </Title>
                                <LinkButton
                                    onClick={() => null}
                                    href={href}
                                    text="Загрузить"
                                    icon={<FiDownload />}
                                    width="170px"
                                    background={Colors.blue.main}
                                    textColor="#fff"
                                    isActive={validDates}
                                />
                            </section>
                            {i !== data.links.length - 1 && <Divider />}
                        </React.Fragment>
                    )
                })}
            </div>
        </DownloadAgreementsWrapper>
    ) : null
}

export default DownloadAgreements
