import React from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'
import { FiCircle } from 'react-icons/fi'
import styled from 'styled-components'
import { Button } from '.'

const HrCheckboxWrapper = styled.div<{
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
    .hr-checkbox-text {
        user-select: none;
        white-space: pre-wrap;
        font-size: 0.75em;
    }

    svg {
        color: var(--reallyBlue);
        background: var(--theme);
        border-radius: 100%;
        padding: 2px;
    }
`

export interface HrCheckboxProps {
    checked: boolean
    setChecked: (value: boolean) => void
    invisibleOnFalse?: boolean
    text?: string
    isActive?: boolean
    visible?: boolean
}

const HrCheckbox = ({
    text,
    checked,
    setChecked,
    visible = true,
    isActive = true,
    invisibleOnFalse = false,
}: HrCheckboxProps) => {
    if (!visible) return null

    return (
        <HrCheckboxWrapper
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
            {text && <div className="hr-checkbox-text">{text}</div>}
        </HrCheckboxWrapper>
    )
}

export default HrCheckbox
