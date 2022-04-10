import React from 'react'
import styled from 'styled-components'

const Line = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
    column-gap: 5px;
    margin-top: 10px;
`

interface Props {
    keyStr: string
    value: string
}

const KeyValue = ({ keyStr, value }: Props) => {
    return (
        <Line>
            <b>{keyStr}:</b>
            <span>{value}</span>
        </Line>
    )
}

export default KeyValue
