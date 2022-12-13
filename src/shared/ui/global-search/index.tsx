import React, { useEffect } from 'react'
import useDebounce from '@shared/lib/hooks/use-debounce'
import Search from '../search'

type GlobalSearchProps = {
    setExternalValue?: (value: string) => void
    placeholder?: string
    inputAppearance?: boolean
    validationCheck?: boolean
    searchApi: (value: string) => void
    triggerSearchOn?: string[]
}

const GlobalSearch = ({
    setExternalValue,
    inputAppearance,
    placeholder,
    validationCheck,
    searchApi,
    triggerSearchOn,
}: GlobalSearchProps) => {
    const onDebounce = (value: string) => {
        searchApi(value)
    }

    const [value, setValue] = useDebounce({ onDebounce, onClear: onDebounce, delay: 400 })
    const handleChangeValue = (v: string) => {
        setValue(v)
        setExternalValue && setExternalValue(v)
    }

    useEffect(() => {
        onDebounce(value ?? '')
    }, [...(triggerSearchOn ?? [])])

    return (
        <Search
            value={value ?? ''}
            setValue={handleChangeValue}
            inputAppearance={inputAppearance}
            placeholder={placeholder}
            validationCheck={validationCheck}
        />
    )
}

export default GlobalSearch
