import React from 'react'

type Props = {
    words: string[]
}

const DotSeparatedWords = ({ words }: Props) => {
    return (
        <>
            {words.map((word, index) => {
                return word + (index === words.length - 1 ? '' : ' • ')
            })}
        </>
    )
}

export default DotSeparatedWords
