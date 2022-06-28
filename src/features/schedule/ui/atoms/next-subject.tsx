import React from 'react'
import styled from 'styled-components'

const NextSubjectWrapper = styled.div`
    height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
    border-radius: var(--brSemi);
    background: var(--almostTransparent);
    color: var(--theme-mild-opposite);
    padding: 3px 10px;
    white-space: nowrap;
`

interface Props {
    timeLeft: number
    isNext: boolean
}

const NextSubject = ({ timeLeft, isNext }: Props) => {
    const hours = Math.floor(timeLeft / 60)
    return isNext ? (
        <NextSubjectWrapper>
            через {!!hours && hours + 'ч.'} {timeLeft % 60}мин.
        </NextSubjectWrapper>
    ) : null
}

export default NextSubject
