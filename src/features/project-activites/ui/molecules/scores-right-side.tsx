import React from 'react'
import styled from 'styled-components'

interface Props {
    scoreSum: number
}

const RightSide = styled.div`
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    font-size: 0.9em;

    span {
        font-weight: bold;
        padding: 20px;
        background: var(--leftside-bar);
        border-radius: var(--brSemi);
    }
`

const ScoresRightSide = ({ scoreSum }: Props) => {
    return (
        <RightSide>
            <span style={scoreSum > 60 ? { color: 'var(--green)' } : { color: 'var(--red)' }}>
                {scoreSum > 60 ? 'Зачтено' : 'Незачтено'}
            </span>
        </RightSide>
    )
}

export default ScoresRightSide
