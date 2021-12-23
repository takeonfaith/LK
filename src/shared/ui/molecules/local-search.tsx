import React, { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import Input from '../atoms/input'

interface Props<T> {
    whereToSearch: T
    searchEngine: (value: string, whereToSearch: T) => T
    setResult: (res: T | null) => void
}

const LocalSearch = <T,>({ whereToSearch, searchEngine, setResult }: Props<T>) => {
    const [value, setValue] = useState('')

    useEffect(() => {
        if (value.length) setResult(searchEngine(value, whereToSearch))
        else setResult(null)
    }, [value, setResult, searchEngine, whereToSearch])

    return <Input value={value} setValue={setValue} placeholder="Поиск по меню" leftIcon={<FiSearch />} />
}

export default LocalSearch
