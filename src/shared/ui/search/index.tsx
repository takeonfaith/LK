import React, { useCallback } from 'react'
import { FiSearch } from 'react-icons/fi'
import styled from 'styled-components'
import { Input } from '../atoms'
import Subtext from '../subtext'
import englishToRussianKeyboard from './lib/english-to-russian-keyboard'
import isValidEnglishText from './lib/is-valid-english-text'

const SearchStyled = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    width: 100%;
`

type SearchProps = {
    value: string
    setValue: (value: string) => void
    placeholder?: string
    inputAppearance?: boolean
    validationCheck?: boolean
    loading?: boolean
}

const Search = ({ value, setValue, placeholder, inputAppearance, validationCheck, loading }: SearchProps) => {
    const handleSuggestions = useCallback(() => {
        setValue(englishToRussianKeyboard(value))
    }, [value, setValue])

    return (
        <SearchStyled>
            <Input
                value={value}
                placeholder={placeholder}
                leftIcon={<FiSearch />}
                inputAppearance={inputAppearance}
                setValue={setValue}
                loading={loading}
            />
            {value.length > 0 && validationCheck && isValidEnglishText(value) && (
                <Subtext width="100%" maxWidth="100%" onClick={handleSuggestions}>
                    Возможно, вы имели в виду{' '}
                    <a href="#" onClick={(e) => e.preventDefault()}>
                        {englishToRussianKeyboard(value)}
                    </a>
                </Subtext>
            )}
        </SearchStyled>
    )
}

export default Search
