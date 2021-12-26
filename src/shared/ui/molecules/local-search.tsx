import React, { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import Input from '../atoms/input'

interface Props<T, R> {
    whereToSearch: T
    searchEngine: (value: string, whereToSearch: T) => R
    setResult: (res: R | null) => void
    placeholder?: string
}

const LocalSearch = <T, R>({ whereToSearch, searchEngine, setResult, placeholder = 'Поиск по меню' }: Props<T, R>) => {
    const [value, setValue] = useState('')

    useEffect(() => {
        if (value.length) setResult(searchEngine(value, whereToSearch))
        else setResult(null)
    }, [value])

    return <Input value={value} setValue={setValue} placeholder={placeholder} leftIcon={<FiSearch />} />
}

export default LocalSearch
