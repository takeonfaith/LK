import React from 'react'
import styled from 'styled-components'

interface Props {
    score: number
    title: string
}

const ScoreItemWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 15px 20px;
    box-sizing: border-box;
    border-radius: var(--brLight);
    background: var(--search2);
    margin: 3px 0;
`

export const ScoreItem = ({ score, title }: Props) => {
    return (
        <ScoreItemWrapper>
            <span>{title}</span>
            <span style={{ color: 'var(--green)', fontWeight: 'bold' }}>+{score}</span>
        </ScoreItemWrapper>
    )
}
