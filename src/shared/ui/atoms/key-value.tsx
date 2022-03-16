import React from 'react'
import styled from 'styled-components'

const Line = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;

    margin-top: 10px;
`

const Data = styled.span`
    margin-left: 5px;
`

interface Props {
    keyStr: string
    value: string
}

const KeyValue = ({ keyStr, value }: Props) => {
    return (
        <Line>
            <b>{keyStr}:</b>
            <Data>{value}</Data>
        </Line>
    )
}

export default KeyValue
