import React from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'
import { FiCircle } from 'react-icons/fi'
import styled from 'styled-components'
import { Button } from '.'

const CheckboxWrapper = styled.div<{
    invisibleOnFalse: boolean
    checked: boolean
    isActive: boolean
}>`
    transition: 0.1s;
    opacity: ${({ invisibleOnFalse, checked }) => (invisibleOnFalse ? (checked ? 1 : 0) : 1)};
    transform: scale(${({ invisibleOnFalse, checked }) => (invisibleOnFalse ? (checked ? 1 : 0.8) : 1)});
    display: flex;
    align-items: center;
    opacity: ${({ isActive }) => !isActive && 0.7};
    .checkbox-text {
        user-select: none;
    }

    svg {
        color: var(--reallyBlue);
        background: var(--theme);
        border-radius: 100%;
        padding: 2px;
    }
`

interface Props {
    checked: boolean
    setChecked: (value: boolean) => void
    invisibleOnFalse?: boolean
    text?: string
    isActive?: boolean
}

const Checkbox = ({ text, checked, setChecked, isActive = true, invisibleOnFalse = false }: Props) => {
    return (
        <CheckboxWrapper
            checked={checked}
            invisibleOnFalse={invisibleOnFalse}
            onClick={() => {
                isActive && setChecked(!checked)
            }}
            isActive={isActive}
        >
            <Button
                onClick={() => null}
                icon={checked || invisibleOnFalse ? <BsCheckCircleFill /> : <FiCircle />}
                background="transparent"
            />
            {text && <div className="checkbox-text">{text}</div>}
        </CheckboxWrapper>
    )
}

export default Checkbox
