import { Colors } from '@shared/constants'
import englishToRussianKeyboard from '@shared/ui/search/lib/english-to-russian-keyboard'
import isValidEnglishText from '@shared/ui/search/lib/is-valid-english-text'
import Subtext from '@shared/ui/subtext'
import React from 'react'
import styled from 'styled-components'

const NewText = styled.span`
    color: var(--blue);
    font-weight: 500;
    border-radius: 2px;
    cursor: pointer;

    &:hover {
        background: ${Colors.blue.transparent2};
    }

    &:focus-visible {
        background: ${Colors.blue.transparent2};
        outline: none;
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }
`

type Props = {
    value: string
    setValue: (suggestion: string) => void
    visible?: boolean
}

const PerhapsYouMeant = ({ value, setValue, visible = true }: Props) => {
    if (value.length === 0 || !visible || !isValidEnglishText(value)) return null

    const engValue = englishToRussianKeyboard(value)
    const handleClick = () => setValue(engValue)

    return (
        <Subtext width="100%" maxWidth="100%" onClick={handleClick}>
            Возможно, вы имели в виду <NewText tabIndex={10}>{engValue}</NewText>
        </Subtext>
    )
}

export default PerhapsYouMeant
