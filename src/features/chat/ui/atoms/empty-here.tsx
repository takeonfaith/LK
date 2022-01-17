import React from 'react'
import styled from 'styled-components'

const EmptyHereWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text);
    font-weight: 600;
    font-size: 0.8em;

    span {
        padding: 10px 20px;
        border-radius: var(--brSemi);
        background: var(--almostTransparentOpposite);
    }
`

interface Props {
    message?: string
}

const EmptyHere = ({ message = 'Выберите чат' }: Props) => {
    return (
        <EmptyHereWrapper>
            <span>{message}</span>
        </EmptyHereWrapper>
    )
}

export default EmptyHere
