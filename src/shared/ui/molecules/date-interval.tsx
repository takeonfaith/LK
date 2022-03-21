import { Input, Message } from '@ui/atoms'
import React, { useEffect } from 'react'
import { FiAlertCircle } from 'react-icons/fi'
import styled from 'styled-components'

const DateIntervalWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-direction: column;

    .inputs {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    @media (max-width: 400px) {
        .inputs {
            flex-direction: column;
        }
    }
`

interface Props {
    dates: string[]
    setDates: React.Dispatch<React.SetStateAction<string[]>>
    valid: boolean
    setValid: React.Dispatch<React.SetStateAction<boolean>>
}

const DateInterval = ({ dates, setDates, valid, setValid }: Props) => {
    useEffect(() => {
        setValid(new Date(dates[0]) <= new Date(dates[1]) || !dates[0].length || !dates[1].length)
    }, [dates])

    return (
        <DateIntervalWrapper>
            <Message title="Внимание" type="alert" icon={<FiAlertCircle />} visible={!valid}>
                Дата начала не может быть больше даты конца
            </Message>
            <div className="inputs">
                <Input
                    value={dates[0]}
                    danger={!valid}
                    setValue={(value: string) => setDates((prev) => [value, prev[1]])}
                    type="date"
                />
                <Input
                    value={dates[1]}
                    setValue={(value: string) => setDates((prev) => [prev[0], value])}
                    type="date"
                    danger={!valid}
                />
            </div>
        </DateIntervalWrapper>
    )
}

export default DateInterval
