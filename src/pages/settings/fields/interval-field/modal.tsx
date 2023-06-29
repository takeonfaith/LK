import { FieldProps } from '@pages/settings/model'
import get2DigitDumber from '@shared/lib/get-2-digit-number'
import { Button, SubmitButton } from '@shared/ui/atoms'
import DoubleSlider from '@shared/ui/double-slider'
import List from '@shared/ui/list'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useModal } from 'widgets'

const IntervalFieldStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const IntervalFieldModal = (props: FieldProps) => {
    const { value, action } = props
    const { close } = useModal()
    const [fV, sV] = value as number[]
    const [first, setFirst] = useState(fV)
    const [second, setSecond] = useState(sV)
    const [completed, setCompleted] = useState(false)
    const handleAction = () => {
        action?.([first, second])
        close()
    }

    const handleTransform = (value: number) => {
        return get2DigitDumber(Math.floor(value / 60)) + ':' + get2DigitDumber(value % 60)
    }

    const handleChange = (values: [number, number]) => {
        setFirst(values[0])
        setSecond(values[1])
    }

    return (
        <IntervalFieldStyled>
            <DoubleSlider
                range={[0, 1440]}
                step={60}
                valueTransform={handleTransform}
                initialValues={[fV, sV]}
                onSave={() => null}
                onChange={handleChange}
            />
            <List gap={8} direction="horizontal" horizontalAlign="right">
                <Button text="Отменить" width="120px" onClick={close} />
                <SubmitButton
                    width="120px"
                    isLoading={false}
                    completed={completed}
                    text={'Сохранить'}
                    action={handleAction}
                    setCompleted={setCompleted}
                />
            </List>
        </IntervalFieldStyled>
    )
}

export default IntervalFieldModal
