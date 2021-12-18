import React from 'react'
import { FiX } from 'react-icons/fi'
import styled from 'styled-components'
import Button from './button'

const InputWrapper = styled.div<{ leftIcon: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: 100%;

    h5 {
        margin-bottom: 5px;
    }

    .icon {
        position: absolute;
        left: 7px;
        top: 55%;
        transform: translateY(-50%);
        color: var(--text);
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

        &::placeholder {
            font-weight: 500;
        }
    }

    button {
        position: absolute;
        bottom: -2px;
        right: 10px;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
        border-radius: 5px;
        background: var(--search2);
        color: var(--text);
        padding: 0;

        svg {
            width: 10px;
            height: 10px;
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
}

const Input = ({ value, setValue, leftIcon, title, placeholder = 'Введите сюда', type = 'text' }: Props) => {
    return (
        <InputWrapper leftIcon={!!leftIcon}>
            {!!title && <h5>{title}</h5>}
            {leftIcon && <span className="icon">{leftIcon}</span>}
            <input type={type} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
            {!!value.length && <Button icon={<FiX />} onClick={() => setValue('')} />}
        </InputWrapper>
    )
}

export default Input
