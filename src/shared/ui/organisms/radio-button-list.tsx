import { Title } from '@ui/atoms'
import Checkbox from '@ui/atoms/checkbox'
import React from 'react'
import styled from 'styled-components'

const RadioButtonListWrapper = styled.div`
    .buttons {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;
    }
`

export interface RadioButton {
    id: string | number
    title: string
}

interface Props {
    title?: string
    buttons: RadioButton[]
    required?: boolean
    current: RadioButton | null
    setCurrent: (button: RadioButton | null) => void
}

const RadioButtonList = ({ title, buttons, required = false, current, setCurrent }: Props) => {
    return (
        <RadioButtonListWrapper>
            {title && (
                <Title size={5} align="left" bottomGap required={required}>
                    {title}
                </Title>
            )}
            <Checkbox text={'Не выбрано'} key={-1} checked={current === null} setChecked={() => setCurrent(null)} />
            <div className="buttons">
                {buttons.map((button) => {
                    const { id, title } = button
                    return (
                        <Checkbox
                            text={title}
                            key={id}
                            checked={id === current?.id}
                            setChecked={() => setCurrent({ id, title })}
                        />
                    )
                })}
            </div>
        </RadioButtonListWrapper>
    )
}

export default RadioButtonList
