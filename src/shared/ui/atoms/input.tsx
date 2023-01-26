import { Colors } from '@consts'
import React, { useCallback, useEffect, useState } from 'react'
import { FiAlertTriangle, FiEye, FiEyeOff, FiX } from 'react-icons/fi'
import styled from 'styled-components'
import { Title } from '@ui/title'
import { Button } from '@ui/button'
import { Loading, Message } from '.'

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

    .loading-circle {
        position: absolute;
        bottom: 5px;
        right: 5px;
        width: 25px;
        height: 25px;
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
    inputAppearance?: boolean
    required?: boolean
    mask?: boolean
    width?: string
    minWidth?: string
    autocomplete?: boolean
    danger?: boolean
    alertMessage?: string
    minValue?: number | string
    maxValue?: number | string
    loading?: boolean
}

const Input = ({
    value,
    setValue,
    leftIcon,
    title,
    required,
    width,
    minWidth,
    placeholder = 'Введите сюда',
    type = 'text',
    danger: initDanger,
    alertMessage,
    loading = false,
    isActive = true,
    inputAppearance = true,
    mask = false,
    autocomplete = true,
    minValue = undefined,
    maxValue = undefined,
}: Props) => {
    const [inputType, setInputType] = useState(type)
    const [danger, setDanger] = useState<boolean>(initDanger ?? false)

    useEffect(() => {
        setInputType(type)
    }, [type])

    const phoneMask = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const russianNumberBeginnings = ['7', '8', '9']
            const selectionStart = e.target.selectionStart
            let phoneInput = e.target.value.replace(/\D/g, '')
            let formattedPhone = ''

            if (!phoneInput.length) return ''

            if (e.target.value.length !== selectionStart) {
                if (/\D/g.test((e.nativeEvent as InputEvent).data ?? '')) {
                    return phoneInput
                }
                return e.target.value
            }

            if (russianNumberBeginnings.indexOf(phoneInput[0]) > -1) {
                // russian number
                if (phoneInput[0] === '9') phoneInput = '7' + phoneInput
                const firstSymbols = phoneInput[0] === '8' ? '8' : '+7'
                formattedPhone = firstSymbols + ' '
                if (!!phoneInput.length) {
                    formattedPhone += '(' + phoneInput.substring(1, 4)
                }
                if (phoneInput.length >= 5) {
                    formattedPhone += ') ' + phoneInput.substring(4, 7)
                }
                if (phoneInput.length >= 8) {
                    formattedPhone += '-' + phoneInput.substring(7, 9)
                }
                if (phoneInput.length >= 10) {
                    formattedPhone += '-' + phoneInput.substring(9, 11)
                }
            } else {
                // not russian number
                formattedPhone = `+${phoneInput.substring(0, 16)}`
            }

            return formattedPhone
        },
        [type],
    )

    const emailMask = useCallback(
        (email: string) => {
            return email.replace(/@\.*/, '@mospolytech.ru').replace(/mospolytech.ru?/, '')
        },
        [type],
    )

    const phoneMaskKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (
            e.key === 'Backspace' &&
            ((value[1] === '7' && value.length <= 4) || (value[0] === '8' && value.length <= 3))
        ) {
            setValue('')
        }
    }

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
            <Message type="alert" visible={!!alertMessage} icon={<FiAlertTriangle />} title={alertMessage ?? ''} />
            {leftIcon && <span className="left-icon">{leftIcon}</span>}
            <input
                min={minValue}
                max={maxValue}
                step={maxValue ? 0.1 : undefined}
                type={inputType}
                placeholder={placeholder}
                value={value ?? ''}
                autoComplete={autocomplete ? 'on' : 'off'}
                onKeyDown={(e) => type === 'tel' && phoneMaskKeyDown(e)}
                onChange={(e) => {
                    if (mask) {
                        if (type === 'tel') {
                            setValue(phoneMask(e))
                        } else if (type === 'email') {
                            setValue(emailMask(e.target.value))
                        } else setValue(e.target.value)
                    } else setValue(e.target.value)

                    if (type === 'date') {
                        if (minValue || maxValue) {
                            const parsedDate = new Date(e.target.value)

                            let result = false
                            if (minValue) {
                                const parsedMinDate = new Date(minValue)

                                result = parsedDate < parsedMinDate
                            }
                            if (maxValue && !result) {
                                const parsedMaxDate = new Date(maxValue)

                                result = parsedDate > parsedMaxDate
                            }

                            setDanger(result)
                        }
                    }
                }}
                required={required}
                readOnly={!isActive}
            />
            {type !== 'password' ? (
                !!value?.length &&
                inputAppearance &&
                (loading ? <Loading /> : <Button icon={<FiX />} onClick={() => setValue('')} tabIndex={-1} />)
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
