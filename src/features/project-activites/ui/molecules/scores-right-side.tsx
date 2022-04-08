import { Message } from '@ui/message'
import React from 'react'
import { FiCheck, FiCheckCircle, FiX, FiXCircle } from 'react-icons/fi'
import styled from 'styled-components'

interface Props {
    scoreSum: number
}

const RightSide = styled.div`
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ScoresRightSide = ({ scoreSum }: Props) => {
    const isPassed = scoreSum > 60
    return (
        <RightSide>
            <Message
                type={isPassed ? 'success' : 'failure'}
                icon={isPassed ? <FiCheckCircle /> : <FiXCircle />}
                title={isPassed ? 'Зачтено' : 'Незачтено'}
            />
        </RightSide>
    )
}

export default ScoresRightSide
