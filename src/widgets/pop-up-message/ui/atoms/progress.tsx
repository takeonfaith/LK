import { Colors } from '@consts'
import React from 'react'
import styled from 'styled-components'

const ProgressWrapper = styled.div<{ color: string; time: number }>`
    width: 100%;
    border-radius: 10px;
    padding: 2px;
    background: #ffffff2f;

    .inner {
        transition: 0.2s;
        max-width: 100%;
        border-radius: 10px;
        height: 3px;
        background: ${Colors.blue.main};
        animation: innerAnimation ${({ time }) => time + 'ms'} linear forwards;
    }

    @keyframes innerAnimation {
        0% {
            width: 100%;
        }
        100% {
            width: 0%;
        }
    }
`

interface Props {
    color: string
    time: number
}

const Progress = ({ color, time }: Props) => {
    return (
        <ProgressWrapper color={color} time={time}>
            <div className="inner" />
        </ProgressWrapper>
    )
}

export default Progress
