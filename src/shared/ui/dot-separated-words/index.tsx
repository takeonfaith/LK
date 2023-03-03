import React from 'react'

type Props = {
    words: string[]
}

const DotSeparatedWords = ({ words }: Props) => {
    const normalizedWords = words.filter((el) => el.length !== 0)
    return (
        <>
            {normalizedWords.map((word, index) => {
                return word + (index === normalizedWords.length - 1 ? '' : ' • ')
            })}
        </>
    )
}

export default DotSeparatedWords
