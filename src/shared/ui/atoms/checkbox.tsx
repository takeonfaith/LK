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
        white-space: pre-wrap;
        font-size: '1rem';
        margin-left: 6px;
    }

    svg {
        color: var(--reallyBlue);
        background: var(--theme);
        border-radius: 100%;
        padding: 2px;
    }
`

export interface CheckboxProps {
    checked: boolean
    setChecked: (value: boolean) => void
    invisibleOnFalse?: boolean
    text?: string
    isActive?: boolean
    visible?: boolean
}

const Checkbox = ({
    text,
    checked,
    setChecked,
    visible = true,
    isActive = true,
    invisibleOnFalse = false,
}: CheckboxProps) => {
    if (!visible) return null

    return (
        <CheckboxWrapper
            checked={checked}
            invisibleOnFalse={invisibleOnFalse}
            onClick={() => {
                isActive && setChecked(!checked)
            }}
            isActive={isActive}
            className="checkbox"
        >
            <Button
                width="25px"
                height="25px"
                onClick={() => null}
                icon={
                    checked || invisibleOnFalse ? (
                        <BsCheckCircleFill
                            style={{ maxWidth: '20px', width: '20px', height: '20px', maxHeight: '20px' }}
                        />
                    ) : (
                        <FiCircle style={{ maxWidth: '20px', width: '20px', height: '20px', maxHeight: '20px' }} />
                    )
                }
                background="transparent"
            />
            {text && <div className="checkbox-text">{text}</div>}
        </CheckboxWrapper>
    )
}

export default Checkbox
