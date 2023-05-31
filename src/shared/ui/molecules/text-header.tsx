import React from 'react'
import styled from 'styled-components'

const TextHeaderWrapper = styled.div`
    width: 100%;
    text-align: start;
    margin-top: 5px;
    margin-bottom: 15px;
    .title {
        font-size: 1em;
        font-weight: bold;
    }
    @media (max-width: 400px) {
        .date-interval-inputs {
            flex-direction: column;
        }
    }
`

interface Props {
    title?: string
    visible?: boolean
}

const TextHeader = ({ title, visible }: Props) => {
    if (visible)
        return (
            <TextHeaderWrapper>
                <span className="title">{title}</span>
            </TextHeaderWrapper>
        )
    else return null
}

export default TextHeader
