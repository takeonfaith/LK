import React from 'react'
import styled from 'styled-components'

const TextWarningWrapper = styled.div`
    width: 100%;
    text-align: start;
    margin-top: -20px;
    margin-bottom: -10px;
    padding: 10px;
    .title {
        font-size: 0.83em;
        font-weight: bold;
        color: #e27992;
    }

    @media (max-width: 400px) {
        .date-interval-inputs {
            flex-direction: column;
        }
    }
`

interface Props {
    title?: string
    value?: string
    visible?: boolean
}

const TextWarning = ({ title, visible }: Props) => {
    if (visible)
        return (
            <TextWarningWrapper>
                <span className="title">{title}</span>
            </TextWarningWrapper>
        )
    else return null
}

export default TextWarning
