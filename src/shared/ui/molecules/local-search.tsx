import useDebounce from '@shared/lib/hooks/use-debounce'
import React from 'react'
import Search, { Hint } from '../search'

interface Props<T, R> {
    whereToSearch: T
    searchEngine: (value: string, whereToSearch: T) => R
    setResult: (res: R | null) => void
    placeholder?: string
    inputAppearance?: boolean
    setExternalValue?: (value: string) => void
    validationCheck?: boolean
    loadingOnType?: boolean
    hints?: Hint[]
    width?: string
}

const LocalSearch = <T, R>({
    whereToSearch,
    searchEngine,
    setResult,
    inputAppearance,
    setExternalValue,
    hints,
    width,
    loadingOnType = false,
    placeholder = 'Поиск по меню',
    validationCheck = false,
}: Props<T, R>) => {
    const onDebounce = (value: string) => {
        setResult(searchEngine(value, whereToSearch))
    }
    const onClear = () => {
        setResult(null)
    }

    const [value, setValue, loading] = useDebounce({ onDebounce, onClear })

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
            loading={loadingOnType ? loading : false}
            hints={hints}
            width={width}
        />
    )
}

export default LocalSearch
