import { Colors } from '@consts'
import { Divider, LinkButton, Title } from '@ui/atoms'
import { DateInterval } from '@ui/molecules'
import React, { useState } from 'react'
import { FiDownload } from 'react-icons/fi'
import styled from 'styled-components'

const DownloadAcceptsWrapper = styled.div`
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

const DownloadAccepts = () => {
    const [dates, setDates] = useState(['', ''])
    const [validDates, setValidDates] = useState(false)

    return (
        <DownloadAcceptsWrapper>
            <Title size={3} align="left" bottomGap>
                Скачать акцепты
            </Title>
            {/* <div className="content">
                <section>
                    <Title size={4} align="left">
                        Отчет по подписавшим
                    </Title>
                    <LinkButton
                        onClick={() => null}
                        href="/"
                        text="Загрузить"
                        icon={<FiDownload />}
                        width="170px"
                        background={Colors.blue.main}
                        textColor="#fff"
                    />
                </section>
                <Divider />
                <section>
                    <Title size={4} align="left">
                        Отчет по неподписавшим
                    </Title>
                    <LinkButton
                        onClick={() => null}
                        href="/"
                        text="Загрузить"
                        icon={<FiDownload />}
                        width="170px"
                        background={Colors.blue.main}
                        textColor="#fff"
                    />
                </section>
                <Divider />
                <section>
                    <Title size={4} align="left">
                        Отчет по диапазону
                    </Title>
                    <LinkButton
                        onClick={() => null}
                        href="/"
                        text="Загрузить"
                        icon={<FiDownload />}
                        width="170px"
                        background={Colors.blue.main}
                        textColor="#fff"
                        isActive={validDates}
                    />
                </section>
                <DateInterval dates={dates} setDates={setDates} valid={validDates} setValid={setValidDates} />
            </div> */}
        </DownloadAcceptsWrapper>
    )
}

export default DownloadAccepts
