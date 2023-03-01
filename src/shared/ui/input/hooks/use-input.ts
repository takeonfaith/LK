import Masks from '@shared/lib/masks'
import React, { useCallback, useEffect, useState } from 'react'

const useInput = (
    value: string,
    setValue: (value: string) => void,
    type: string,
    initDanger: boolean | undefined,
    minValue: string | number | undefined,
    maxValue: string | number | undefined,
    customMask: ((value: string, prevValue: string) => string) | undefined,
    mask: boolean | undefined,
) => {
    const [inputType, setInputType] = useState(type)
    const [danger, setDanger] = useState<boolean>(initDanger ?? false)

    useEffect(() => {
        setInputType(type)
    }, [type])

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

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (mask) {
            if (customMask) {
                setValue(customMask(e.target.value, value))
            } else if (type === 'tel') {
                setValue(Masks.phoneMask(e))
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
    }

    const buttonOnClick = () => setInputType((prev) => (prev === 'password' ? 'text' : 'password'))

    return { inputType, danger, phoneMaskKeyDown, buttonOnClick, handleOnChange }
}

export default useInput
