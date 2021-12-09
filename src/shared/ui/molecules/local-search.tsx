import React, { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import Input from '../atoms/input'

interface Props<T> {
    whereToSearch: Array<T>
    searchEngine: (value: string, whereToSearch: Array<T>) => Array<T>
    setResult: (res: Array<T>) => void
}

const LocalSearch = <T,>({ whereToSearch, searchEngine, setResult }: Props<T>) => {
    const [value, setValue] = useState('')

    useEffect(() => {
        setResult(searchEngine(value, whereToSearch))
    }, [value, setResult, searchEngine, whereToSearch])

    return <Input value={value} setValue={setValue} placeholder="Поиск по меню" leftIcon={<FiSearch />} />
}

export default LocalSearch
