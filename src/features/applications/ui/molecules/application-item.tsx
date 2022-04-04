import { Application } from '@api/model'
import { Colors } from '@consts'
import { Message } from '@ui/atoms'
import React from 'react'
import styled from 'styled-components'
import { useModal } from 'widgets'
import ApplicationModal from './application-modal'

const ApplicationItemWrapper = styled.div<{ even: boolean }>`
    display: flex;
    align-items: center;
    font-size: 0.9em;
    height: 50px;
    color: var(--text);
    background: ${({ even }) => (even ? 'var(--scheduleBg)' : 'var(--schedule)')};
    cursor: pointer;
    overflow: hidden;
    padding: 0px 10px;

    .structuralSubdivision {
        display: block;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .name {
        font-weight: 600;
    }

    &:hover {
        background: ${Colors.blue.reallyTransparent};
    }

    & > * {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 1200px) {
        .structuralSubdivision,
        .notes {
            display: none;
        }
    }

    @media (max-width: 1000px) {
        .regNumber {
            display: flex;
        }
    }

    @media (max-width: 700px) {
        font-size: 0.8em;
        .structuralSubdivision {
            display: none;
        }
    }

    @media (max-width: 450px) {
        .regNumber {
            display: none;
        }
    }

    @media (max-width: 300px) {
        .regNumber,
        .regDate {
            display: none;
        }
    }
`

type Props = Application & { index: number }

const ApplicationItem = (props: Props) => {
    const { open } = useModal()
    const { regDate, notes, regNumber, requestBody, requestTitle, status, statusDate, structuralSubdivision } = props
    return (
        <ApplicationItemWrapper even={props.index % 2 === 0} onClick={() => open(<ApplicationModal {...props} />)}>
            <div className="name">{requestTitle}</div>
            <div className="regDate">{regDate}</div>
            <div className="regNumber">{regNumber}</div>
            <div className="status">
                <Message
                    type={status === 'Готово' ? 'success' : status === 'Отклонено' ? 'failure' : 'alert'}
                    title={status}
                    align="center"
                    width="100%"
                    maxWidth="150px"
                />
            </div>
            <div className="structuralSubdivision">{structuralSubdivision}</div>
            <div className="notes">{notes}</div>
        </ApplicationItemWrapper>
    )
}

export default ApplicationItem
