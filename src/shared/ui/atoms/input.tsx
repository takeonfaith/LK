import React, { useState } from 'react'
import { FiEye, FiEyeOff, FiX } from 'react-icons/fi'
import styled from 'styled-components'
import Button from './button'

const InputWrapper = styled.div<{ leftIcon: boolean; isActive: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: 100%;
    pointer-events: ${({ isActive }) => !isActive && 'none'};
    opacity: ${({ isActive }) => !isActive && 0.6};

    h5 {
        margin-bottom: 5px;
    }

    .icon {
        position: absolute;
        left: 7px;
        top: 55%;
        transform: translateY(-50%);
        color: var(--text);
        opacity: 0.4;
    }

    input {
        border: none;
        color: var(--text);
        outline: none;
        background: var(--search);
        height: 100%;
        width: 100%;
        padding: 10px;
        font-weight: bold;
        border-radius: 7px;
        padding-left: ${({ leftIcon }) => (leftIcon ? '30px' : '10px')};
        padding-right: 35px;

        &::placeholder {
            font-weight: 500;
        }

        &:focus-visible {
            outline: 4px solid var(--almostTransparentOpposite);
        }

        &:focus:not(:focus-visible) {
            outline: none;
        }
    }

    button {
        position: absolute;
        bottom: 5px;
        right: 5px;
        width: 25px;
        height: 25px;
        border-radius: 5px;
        background: var(--search2);
        color: var(--text);
        padding: 0;

        &:active {
            transform: scale(1);
        }

        svg {
            width: 15px;
            height: 15px;
        }
    }
`

interface Props {
    value: string
    setValue: (value: string) => void
    leftIcon?: React.ReactNode
    title?: string
    placeholder?: string
    type?: string
    isActive?: boolean
}

const Input = ({
    value,
    setValue,
    leftIcon,
    title,
    placeholder = 'Введите сюда',
    type = 'text',
    isActive = true,
}: Props) => {
    const [inputType, setInputType] = useState(type)
    return (
        <InputWrapper leftIcon={!!leftIcon} isActive={isActive}>
            {!!title && <h5>{title}</h5>}
            {leftIcon && <span className="icon">{leftIcon}</span>}
            <input
                type={inputType}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            {type !== 'password' ? (
                !!value.length && <Button icon={<FiX />} onClick={() => setValue('')} tabIndex={-1} />
            ) : (
                <Button
                    icon={inputType === 'password' ? <FiEye /> : <FiEyeOff />}
                    tabIndex={-1}
                    onClick={() => setInputType((prev) => (prev === 'password' ? 'text' : 'password'))}
                />
            )}
        </InputWrapper>
    )
}

export default Input
