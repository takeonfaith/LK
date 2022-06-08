import List from '@ui/list'
import Tooltip from '@ui/tooltip'
import React, { useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import styled from 'styled-components'

const StarWrapper = styled.div<{ lessThanCurrentHover?: boolean }>`
    cursor: pointer;
    svg {
        width: 30px;
        color: var(--reallyBlue);
        height: 30px;
        opacity: ${({ lessThanCurrentHover }) => lessThanCurrentHover && '0.5'};
        transition: 0.05s;

        &:active {
            transform: scale(1.2);
            filter: brightness(1.5);
        }
    }
`

interface StarProps {
    index: number
    filled: boolean
    currentHover: number | null
    setCurrentHover: React.Dispatch<React.SetStateAction<number | null>>
    setRate: (value: number) => void
}

const Star = ({ index, currentHover, filled, setRate, setCurrentHover }: StarProps) => {
    const normalizedCurrentHover = currentHover ?? 6
    if ((!filled && normalizedCurrentHover === 6) || normalizedCurrentHover < index)
        return (
            <StarWrapper
                lessThanCurrentHover={normalizedCurrentHover < index}
                onMouseLeave={() => setCurrentHover(null)}
                onMouseOver={() => setCurrentHover(index)}
                onClick={() => setRate(index)}
            >
                <AiOutlineStar />
            </StarWrapper>
        )

    return (
        <StarWrapper
            lessThanCurrentHover={normalizedCurrentHover < index}
            onMouseLeave={() => setCurrentHover(null)}
            onMouseOver={() => setCurrentHover(index)}
            onClick={() => {
                setRate(index)
            }}
        >
            <AiFillStar />
        </StarWrapper>
    )
}

interface Props {
    title?: string
    rate: number | null
    setRate: (value: number) => void
}

const Rate = ({ title, rate, setRate }: Props) => {
    const [currentHover, setCurrentHover] = useState<number | null>(null)
    const words = ['Плохо🤬', 'Скорее плохо😖', 'Нормально🤔', 'Хорошо😊', 'Отлично😃']

    return (
        <List title={title} direction="horizontal" gap={0} scroll={false}>
            {Array(5)
                .fill(0)
                .map((_, i) => {
                    return (
                        <Tooltip content={words[i]} key={i}>
                            <Star
                                index={i}
                                setRate={setRate}
                                currentHover={currentHover}
                                setCurrentHover={setCurrentHover}
                                filled={i <= (rate ?? -1)}
                            />
                        </Tooltip>
                    )
                })}
        </List>
    )
}

export default Rate
