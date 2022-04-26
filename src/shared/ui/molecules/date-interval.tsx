import { Input, Message, Title } from '@ui/atoms'
import React, { useEffect } from 'react'
import { FiAlertCircle } from 'react-icons/fi'
import styled from 'styled-components'

const DateIntervalWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-direction: column;

    .date-interval-inputs {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    @media (max-width: 400px) {
        .date-interval-inputs {
            flex-direction: column;
        }
    }
`

interface Props {
    title?: string
    required?: boolean
    dates: string[]
    setDates: React.Dispatch<React.SetStateAction<string[]>>
    valid: boolean
    setValid: React.Dispatch<React.SetStateAction<boolean>>
}

const DateInterval = ({ title, required, dates, setDates, valid, setValid }: Props) => {
    useEffect(() => {
        setValid(new Date(dates[0]) <= new Date(dates[1]) || !dates[0].length || !dates[1].length)
    }, [dates])

    return (
        <DateIntervalWrapper>
            <Title size={5} align={'left'} visible={!!title} required={required}>
                {title}
            </Title>
            <Message title="Внимание" type="alert" icon={<FiAlertCircle />} visible={!valid}>
                Дата начала не может быть больше даты конца
            </Message>
            <div className="date-interval-inputs">
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
