import { Alert } from '@shared/api/model/alert'
import localizeDate from '@shared/lib/dates/localize-date'
import { Divider } from '@shared/ui/divider'
import DotSeparatedWords from '@shared/ui/dot-separated-words'
import Subtext from '@shared/ui/subtext'
import React from 'react'
import styled from 'styled-components'

interface Props {
    alert: Alert
}

const AlertModal: React.FC<Props> = ({ alert }) => {
    const { content, time, date } = alert
    return (
        <Wrapper>
            <Subtext fontSize="0.9rem">
                <DotSeparatedWords words={[localizeDate(date), time]} />
            </Subtext>
            <Divider width="100%" margin="12px 0" />
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    max-width: 600px;

    & > div {
        line-height: 1.6rem;
        width: 100%;

        p {
            margin-top: 10px;
            width: 100%;
            opacity: 0.9;
        }

        a {
            text-decoration: underline;
        }

        strong,
        p:nth-child(1) {
            font-weight: 600;
            margin: 0;
            opacity: 1;
            text-align: left !important;
        }

        span {
            font-size: 1rem !important;
        }

        img {
            width: 100% !important;
            height: auto !important;
            object-fit: cover;
            border-radius: var(--brLight);
            margin-bottom: 20px;
        }
    }
`

export default AlertModal
