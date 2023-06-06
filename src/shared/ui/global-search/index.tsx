import useDebounce from '@shared/lib/hooks/use-debounce'
import React from 'react'
import Search, { Hint } from '../search'

type GlobalSearchProps = {
    setExternalValue?: (value: string) => void
    placeholder?: string
    inputAppearance?: boolean
    validationCheck?: boolean
    searchApi: (value: string) => void
    triggerSearchOn?: string[]
    hints?: Hint[]
}

const GlobalSearch = ({
    setExternalValue,
    inputAppearance,
    placeholder,
    validationCheck,
    searchApi,
    triggerSearchOn,
    hints,
}: GlobalSearchProps) => {
    const onSearch = async (value: string) => {
        await searchApi(value)
    }

    const [value, setValue, loading] = useDebounce({
        onDebounce: onSearch,
        onClear: onSearch,
        delay: 1000,
        triggerDelay: 0,
        deps: triggerSearchOn,
    })

    const handleChangeValue = (v: string) => {
        setValue(v)
        setExternalValue && setExternalValue(v)
    }

    return (
        <Search
            value={value ?? ''}
            setValue={handleChangeValue}
            inputAppearance={inputAppearance}
            placeholder={placeholder}
            validationCheck={validationCheck}
            loading={loading}
            hints={hints}
        />
    )
}

export default GlobalSearch
