import { Message } from '@ui/message'
import React from 'react'
import { FiCheck, FiX } from 'react-icons/fi'
import styled from 'styled-components'

interface Props {
    scoreSum: number
}

const RightSide = styled.div`
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 550px) {
        width: 50%;
    }
`

const ScoresRightSide = ({ scoreSum }: Props) => {
    const isPassed = scoreSum > 60
    return (
        <RightSide>
            <Message
                type={isPassed ? 'success' : 'failure'}
                icon={isPassed ? <FiCheck /> : <FiX />}
                title={isPassed ? 'Зачтено' : 'Незачтено'}
                align="center"
            />
        </RightSide>
    )
}

export default ScoresRightSide
