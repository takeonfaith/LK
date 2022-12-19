import { Alert } from '@shared/api/model/alert'
import getShortString from '@shared/lib/get-short-string'
import localizeDate from '@shared/lib/localize-date'
import { Button } from '@shared/ui/button'
import Subtext from '@shared/ui/subtext'
import { Title } from '@shared/ui/title'
import React from 'react'
import styled from 'styled-components'

const AlertItemStyled = styled.div`
    width: 100%;
    padding: 16px;
    border-radius: var(--brLight);
    background: var(--form);
    box-shadow: var(--schedule-shadow);
    cursor: pointer;

    .content {
        font-size: 0.95rem;
        margin-bottom: 10px;
    }
`

type Props = { alert: Alert; onClick: (alert: Alert) => void }

const AlertItem = ({ alert, onClick }: Props) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, title, content, date, time } = alert
    const normalizedDate = localizeDate(date)
    const handleClick = () => onClick(alert)
    return (
        <AlertItemStyled onClick={handleClick}>
            <Subtext fontSize="0.9rem">
                {normalizedDate} • {time}
            </Subtext>
            <Title size={4} align="left" bottomGap>
                {title}
            </Title>
            <div className="content">
                <div dangerouslySetInnerHTML={{ __html: getShortString(content, 200) }} />
            </div>
            <Button text="Подробнее" />
        </AlertItemStyled>
    )
}

export default AlertItem
