import React from 'react'
import styled from 'styled-components'

interface Props {
    score: number
    scoreText?: string
    title: string
    bold?: boolean
    color?: string
}

const ScoreItemWrapper = styled.div<{ bold?: boolean; color: string }>`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    box-sizing: border-box;
    border-radius: var(--brLight);
    font-size: 0.9rem;
    font-weight: ${({ bold }) => (bold ? 600 : 400)};

    span {
        font-weight: bold;
        color: ${({ color }) => color};
    }
`

export const ScoreItem = ({ score, title, bold, scoreText, color }: Props) => {
    return (
        <ScoreItemWrapper bold={bold} color={color ?? (score >= 60 ? 'var(--green)' : 'var(--red)')}>
            <div>{title}</div>
            <div>
                <span>{score}</span>
                {scoreText && <span> ({scoreText})</span>}
            </div>
        </ScoreItemWrapper>
    )
}
