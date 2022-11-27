import React from 'react'
import Subtext from '@ui/subtext'
import normalizeString from '@utils/normalize-string'
import { useCallback, useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import Input from '../atoms/input'

const isValidText = (text: string) => {
    return /^[-a-z_]/.test(text)
}

const englishToRussianKeyboard = (text: string) => {
    const letters = {
        a: 'ф',
        b: 'и',
        c: 'с',
        d: 'в',
        e: 'у',
        f: 'а',
        g: 'п',
        h: 'р',
        i: 'ш',
        j: 'о',
        k: 'л',
        l: 'д',
        m: 'ь',
        n: 'т',
        o: 'щ',
        p: 'з',
        q: 'й',
        r: 'к',
        s: 'ы',
        t: 'е',
        u: 'г',
        v: 'м',
        w: 'ц',
        x: 'ч',
        y: 'н',
        z: 'я',
        '[': 'х',
        '{': 'х',
        ']': 'ъ',
        '}': 'ъ',
        "'": 'э',
        ';': 'ж',
        ',': 'б',
        '.': 'ю',
    }

    let finalString = ''
    for (let i = 0; i < text.length; i++) {
        const letter = normalizeString(text.charAt(i)) as keyof typeof letters
        const element = i === 0 ? letters[letter].toUpperCase() : letters[letter]
        finalString += element
    }

    return finalString
}

interface Props<T, R> {
    whereToSearch: T
    searchEngine: (value: string, whereToSearch: T) => R
    setResult: (res: R | null) => void
    placeholder?: string
    inputAppearance?: boolean
    setExternalValue?: (value: string) => void
    validationCheck?: boolean
}

const LocalSearch = <T, R>({
    whereToSearch,
    searchEngine,
    setResult,
    inputAppearance,
    setExternalValue,
    placeholder = 'Поиск по меню',
    validationCheck = false,
}: Props<T, R>) => {
    const [value, setValue] = useState('')

    useEffect(() => {
        if (value.length) {
            const delayedSearch = setTimeout(() => {
                setResult(searchEngine(value, whereToSearch))
            }, 300)

            return () => clearTimeout(delayedSearch)
        } else setResult(null)
    }, [value])

    const handleSuggestions = useCallback(() => {
        setValue(englishToRussianKeyboard(value))
    }, [value, setValue])

    return (
        <>
            <Input
                value={value}
                placeholder={placeholder}
                leftIcon={<FiSearch />}
                inputAppearance={inputAppearance}
                setValue={(value: string) => {
                    setValue(value)
                    setExternalValue && setExternalValue(value)
                }}
            />
            {value.length > 0 && validationCheck && isValidText(value) && (
                <Subtext width="100%" maxWidth="100%" onClick={handleSuggestions}>
                    Возможно, вы имели в виду{' '}
                    <a href="#" onClick={(e) => e.preventDefault()}>
                        {englishToRussianKeyboard(value)}
                    </a>
                </Subtext>
            )}
        </>
    )
}

export default LocalSearch
