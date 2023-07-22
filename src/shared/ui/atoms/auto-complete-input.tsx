import { SelectItems } from '@features/select/ui/atoms'
import { Colors } from '@shared/consts'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Title } from '../title'

interface Props {
    value: string
    suggestions: string[]
    setValue: (value: string) => void
    leftIcon?: React.ReactNode
    title?: string
    placeholder?: string
    type?: string
    isActive?: boolean
    inputAppearance?: boolean
    required?: boolean
    mask?: boolean
    width?: string
    minWidth?: string
    autocomplete?: boolean
    danger?: boolean
    alertMessage?: string
}
const InputWrapper = styled.div<{
    leftIcon: boolean
    isActive: boolean
    inputAppearance: boolean
    width?: string
    minWidth?: string
    danger?: boolean
}>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: ${({ width }) => width ?? '100%'};
    min-width: ${({ minWidth, width }) => minWidth ?? width};
    pointer-events: ${({ isActive }) => !isActive && 'none'};
    opacity: ${({ isActive }) => !isActive && 0.7};

    .left-icon {
        position: absolute;
        left: 7px;
        top: 55%;
        transform: translateY(-50%);
        color: var(--text);
        opacity: 0.4;
    }

    .message {
        margin-bottom: 5px;
    }

    input {
        border: none;
        color: var(--text);
        outline: none;
        background: ${({ inputAppearance }) => (inputAppearance ? 'var(--search)' : 'transparent')};
        height: 100%;
        width: 100%;
        padding: 10px;
        font-weight: bold;
        border-radius: 7px;
        padding-left: ${({ leftIcon, inputAppearance }) => (leftIcon ? '30px' : inputAppearance ? '10px' : '0')};
        padding-right: ${({ inputAppearance }) => (!inputAppearance ? '0' : '35px')};
        max-height: 36px;
        border: ${({ danger }) => danger && `2px solid ${Colors.red.main}`};

        &::placeholder {
            font-weight: 500;
        }

        &:focus-visible {
            outline: ${({ inputAppearance }) => inputAppearance && '4px solid var(--almostTransparentOpposite)'};
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
const AutoCompleteInputItems = styled.ul<{ isOpen: boolean; itemsAmount: number; width?: string; title?: string }>`
    max-width: ${({ width }) => width ?? '155px'};
    width: 100%;
    min-width: 50px;
    z-index: 5;
    cursor: pointer;
    min-height: 60px;
    /**
    *height: ${({ itemsAmount }) => itemsAmount * 30 + 'px'};
    */

    position: absolute;
    top: ${({ title }) => (!!title ? '80px' : '46px')};

    box-shadow: var(--light-box-shadow);
    border-radius: var(--brLight);
    background: var(--schedule);
    user-select: none;
    max-height: 250px;
    overflow-y: auto;
    overflow-x: hidden;
    opacity: 0;

    transition: 0.2s opacity, 0.2s visibility, 0.2s top, height 0.3s;

    &.open {
        opacity: 1;
        visibility: visible;
        top: ${({ title }) => (!!title ? '60px' : '46px')};
    }

    &.close {
        opacity: 0;
        visibility: hidden;
        top: 36px;
    }
`
const AutoCompleteInputItem = styled.li<{ isSelected: boolean; leadingToSelected?: boolean }>`
    list-style-type: none;
    background: var(${({ isSelected }) => (isSelected ? '--reallyBlue' : '')});
    color: ${({ isSelected }) => (isSelected ? '#fff' : '')};
    min-height: 30px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .icon {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-right: 5px;
    }

    .select-item-title {
        overflow: hidden;
        white-space: pre-line;
        width: 100%;
        text-overflow: ellipsis;
    }

    animation: fadeIn 0.4s forwards;

    &::before {
        content: '';
        display: block;
        position: absolute;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: -7px;
        min-width: ${({ leadingToSelected }) => (leadingToSelected ? '5px' : '0px')};
        height: 5px;
        border-radius: 10px;
        background: var(--reallyBlue);
    }

    .back-button {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: var(--blue);
        transition: 0.2s transform;

        &:active {
            transform: translateX(-20px);
        }
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: scale(1.04);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
`

const AutocompleteInput = ({
    value,
    setValue,
    leftIcon,
    title,
    required,
    width,
    minWidth,
    placeholder = 'Начните ввод...',
    danger,
    isActive = true,
    inputAppearance = true,
    suggestions,
}: Props) => {
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([])
    const [isOpened, setIsOpened] = useState(true)

    // Фильтруем предложения на основе ввода пользователя
    useEffect(() => {
        if (value) {
            const filtered = suggestions.filter((suggestion) => suggestion.toLowerCase().includes(value.toLowerCase()))
            setFilteredSuggestions(filtered)
        } else {
            setFilteredSuggestions([])
        }
    }, [value, suggestions])

    return (
        <InputWrapper
            leftIcon={!!leftIcon}
            isActive={isActive}
            inputAppearance={inputAppearance}
            width={width}
            danger={danger}
            minWidth={minWidth}
        >
            <Title size={5} align="left" visible={!!title} bottomGap="5px" required={required}>
                {title}
            </Title>
            <div>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                        setIsOpened(true)
                    }}
                    placeholder={placeholder}
                />
                {filteredSuggestions.length > 0 && (
                    <AutoCompleteInputItems
                        width={'100%'}
                        isOpen={isOpened}
                        className={isOpened ? 'open' : 'close'}
                        itemsAmount={filteredSuggestions.length}
                        title={title}
                    >
                        {filteredSuggestions.map((suggestion, index) => (
                            <AutoCompleteInputItem
                                key={index}
                                isSelected={false}
                                onClick={() => {
                                    setValue(suggestion)
                                    setFilteredSuggestions([])
                                    setIsOpened(false)
                                }}
                            >
                                {suggestion}
                            </AutoCompleteInputItem>
                        ))}
                    </AutoCompleteInputItems>
                )}
            </div>
        </InputWrapper>
    )
}

export default AutocompleteInput
