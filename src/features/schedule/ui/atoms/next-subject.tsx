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
    margin-left: 5px;
    padding: 3px 10px;
`

interface Props {
    timeLeft: number
    isNext: boolean
}

const NextSubject = ({ timeLeft, isNext }: Props) => {
    return isNext ? (
        <NextSubjectWrapper>через {`${Math.floor(timeLeft / 60)}ч.${timeLeft % 60}мин.`}</NextSubjectWrapper>
    ) : null
}

export default NextSubject
